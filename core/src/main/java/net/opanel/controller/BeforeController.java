package net.opanel.controller;

import io.javalin.http.*;
import io.javalin.http.servlet.JavalinServletContext;
import net.opanel.OPanel;
import net.opanel.config.McpConfiguration;
import net.opanel.storage.Storage;
import net.opanel.storage.StorageKey;
import net.opanel.web.JwtManager;

public class BeforeController extends BaseController {
    private static final String DEFAULT_RSC_FILE = "index.txt";

    public BeforeController(OPanel plugin) {
        super(plugin);
    }

    public Handler beforeAll = ctx -> {
        ctx.header("X-Powered-By", "OPanel");
    };

    public Handler authToken = ctx -> {
        if(ctx.path().startsWith("/api/auth") || ctx.path().equals("/api/icon") || ctx.method() == HandlerType.OPTIONS) return;

        String authorization = ctx.header("Authorization");
        if(authorization != null && authorization.startsWith("Bearer ") && !ctx.path().startsWith("/api/security")) { // auth mcp access token
            String accessToken = authorization.substring(7);
            if(!accessToken.startsWith("o-") || accessToken.length() != 50) {
                sendResponse(ctx, HttpStatus.BAD_REQUEST, "Authorization header is invalid.");
                clearContextTasks(ctx);
                return;
            }

            McpConfiguration mcpConfig = Storage.get().getStoredData(StorageKey.MCP_CONFIG);
            if(mcpConfig == null || !mcpConfig.enabled) {
                sendResponse(ctx, HttpStatus.SERVICE_UNAVAILABLE, "Mcp is not enabled.");
                clearContextTasks(ctx);
                return;
            }
            if(!accessToken.equals(mcpConfig.accessToken)) {
                sendResponse(ctx, HttpStatus.UNAUTHORIZED, "Mcp access token is invalid.");
                clearContextTasks(ctx);
            }
            return;
        }

        String token = ctx.cookie("token"); // jws
        if(token == null) {
            sendResponse(ctx, HttpStatus.UNAUTHORIZED, "Token is missing.");
            clearContextTasks(ctx);
            return;
        }

        final String hashedRealKey = plugin.getConfig().accessKey; // hashed 2
        if(!JwtManager.verifyToken(token, hashedRealKey, plugin.getConfig().salt)) {
            ctx.removeCookie("token");
            sendResponse(ctx, HttpStatus.UNAUTHORIZED, "Token is invalid.");
            clearContextTasks(ctx);
        }
    };

    /** @see <a href="https://github.com/vercel/next.js/discussions/59394">https://github.com/vercel/next.js/discussions/59394</a> */
    public Handler handleRsc = ctx -> {
        String reqPath = ctx.path();
        if(!reqPath.contains(".txt") || reqPath.contains(DEFAULT_RSC_FILE)) return;

        // Request robots.txt file
        if(reqPath.equals("/robots.txt")) return;

        // Maybe a next.js bug, which will lead user to <page_name>.txt file without _rsc param
        // just redirect it to the correct page
        if(ctx.queryParam("_rsc") == null) {
            ctx.redirect(reqPath.replaceAll("\\.txt/?$", "") +"?"+ ctx.queryString());
            return;
        }

        // Rsc file request
        ctx.redirect(reqPath.replaceAll("\\.txt$", "/"+ DEFAULT_RSC_FILE) +"?"+ ctx.queryString());
    };

    public Handler handleFonts = ctx -> {
        if(ctx.path().endsWith(".ttf")) {
            ctx.status(HttpStatus.OK);
            ctx.contentType(ContentType.FONT_TTF);
        }
        if(ctx.path().endsWith(".otf")) {
            ctx.status(HttpStatus.OK);
            ctx.contentType(ContentType.FONT_OTF);
        }
    };

    private void clearContextTasks(Context ctx) {
        ((JavalinServletContext) ctx).getTasks().clear();
    }
}
