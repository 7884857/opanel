package net.opanel.controller.api;

import io.javalin.http.Handler;
import io.javalin.http.HttpStatus;
import net.opanel.OPanel;
import net.opanel.controller.BaseController;

import java.util.HashMap;

public class GamerulesController extends BaseController {
    public GamerulesController(OPanel plugin) {
        super(plugin);
    }

    public Handler getGamerules = ctx -> {
        HashMap<String, Object> obj = new HashMap<>();
        obj.put("gamerules", server.getGamerules());
        sendResponse(ctx, obj);
    };

    public Handler changeGamerule = ctx -> {
        GamerulesEditRequestBodyType reqBody = ctx.bodyAsClass(GamerulesEditRequestBodyType.class);
        if(reqBody.gamerules == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Gamerules is missing.");
            return;
        }

        server.setGamerules(reqBody.gamerules);
        sendResponse(ctx, HttpStatus.OK);
    };

    public Handler patchGamerule = ctx -> { // for mcp
        final String key = ctx.queryParam("key");
        final String value = ctx.queryParam("value");
        if(key == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Key is missing.");
            return;
        }
        if(value == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Value is missing.");
            return;
        }

        HashMap<String, Object> gamerules = server.getGamerules();
        if(!gamerules.containsKey(key)) {
            sendResponse(ctx, HttpStatus.NOT_FOUND, "Cannot find the specified gamerule.");
            return;
        }
        gamerules.put(key, value);
        server.setGamerules(gamerules);
        sendResponse(ctx, HttpStatus.OK);
    };

    private static class GamerulesEditRequestBodyType {
        HashMap<String, Object> gamerules;
    }
}
