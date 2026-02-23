package net.opanel.controller.api;

import io.javalin.http.Handler;
import io.javalin.http.HttpStatus;
import net.opanel.OPanel;
import net.opanel.controller.BaseController;

import java.util.HashMap;

public class TerminalController extends BaseController {
    public TerminalController(OPanel plugin) {
        super(plugin);
    }

    public Handler getCommands = ctx -> { // for mcp
        HashMap<String, Object> obj = new HashMap<>();
        obj.put("commands", plugin.getServer().getCommands());
        sendResponse(ctx, obj);
    };

    public Handler sendCommand = ctx -> { // for mcp
        String command = ctx.body();
        if(command.startsWith("/")) {
            command = command.substring(1);
        }

        try {
            plugin.getServer().sendServerCommand(command);
            sendResponse(ctx, HttpStatus.OK);
        } catch (Exception e) {
            sendResponse(ctx, HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    };
}
