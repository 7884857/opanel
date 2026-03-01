package net.opanel.controller.api;

import io.javalin.http.Handler;
import io.javalin.http.HttpStatus;
import net.opanel.OPanel;
import net.opanel.config.OpenAPIConfiguration;
import net.opanel.controller.BaseController;
import net.opanel.storage.Storage;
import net.opanel.storage.StorageKey;

import java.util.HashMap;

public class OpenAPIController extends BaseController {
    private OpenAPIConfiguration config;

    public OpenAPIController(OPanel plugin) {
        super(plugin);

        config = Storage.get().getStoredData(StorageKey.OPEN_API_CONFIG);
    }

    public Handler getOpenAPIEnabled = ctx -> {
        HashMap<String, Object> obj = new HashMap<>();
        obj.put("enabled", config.enabled);
        sendResponse(ctx, obj);
    };

    public Handler toggleOpenAPI = ctx -> {
        final String enabled = ctx.queryParam("enabled");
        if(enabled == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Status is missing.");
            return;
        }

        config.enabled = enabled.equals("1");
        Storage.get().setStoredData(StorageKey.OPEN_API_CONFIG, config);
        sendResponse(ctx, HttpStatus.OK);
    };
}
