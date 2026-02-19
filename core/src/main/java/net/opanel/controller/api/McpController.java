package net.opanel.controller.api;

import io.javalin.http.Handler;
import io.javalin.http.HttpStatus;
import net.opanel.OPanel;
import net.opanel.controller.BaseController;
import net.opanel.storage.Storage;
import net.opanel.storage.StorageKey;
import net.opanel.utils.Utils;

import java.util.HashMap;

public class McpController extends BaseController {
    private McpConfiguration config;

    public McpController(OPanel plugin) {
        super(plugin);

        config = Storage.get().getStoredData(StorageKey.MCP_CONFIG);
    }

    public Handler getMcpEnabled = ctx -> {
        HashMap<String, Object> obj = new HashMap<>();
        obj.put("enabled", config.enabled);
        sendResponse(ctx, obj);
    };

    public Handler toggleMcp = ctx -> {
        final String enabled = ctx.queryParam("enabled");
        if(enabled == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Status is missing.");
            return;
        }
        if(config.accessToken == null && enabled.equals("1")) {
            sendResponse(ctx, HttpStatus.FORBIDDEN, "Access token is not set.");
            return;
        }

        config.enabled = enabled.equals("1");
        Storage.get().setStoredData(StorageKey.MCP_CONFIG, config);
        sendResponse(ctx, HttpStatus.OK);
    };

    public Handler generateAccessToken = ctx -> {
        final String accessToken = "o-"+ Utils.generateRandomCharSequence(48, false);
        config.accessToken = accessToken;
        Storage.get().setStoredData(StorageKey.MCP_CONFIG, config);

        HashMap<String, Object> obj = new HashMap<>();
        obj.put("accessToken", accessToken);
        sendResponse(ctx, obj);
    };

    public Handler getMaskedAccessToken = ctx -> {
        String accessToken = config.accessToken;
        if(accessToken == null) {
            HashMap<String, Object> obj = new HashMap<>();
            obj.put("maskedAccessToken", null);
            sendResponse(ctx, obj);
            return;
        }

        String masked = new StringBuilder()
            .append(accessToken, 0, 4)
            .append("***")
            .append(accessToken.substring(accessToken.length() - 5))
            .toString();

        HashMap<String, Object> obj = new HashMap<>();
        obj.put("maskedAccessToken", masked);
        sendResponse(ctx, obj);
    };

    public static class McpConfiguration {
        public boolean enabled;
        public String accessToken;

        public McpConfiguration(boolean enabled) {
            this.enabled = enabled;
        }
    }
}
