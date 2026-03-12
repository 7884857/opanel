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
        ensureInterfaceConfig();

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

        ensureInterfaceConfig();

        config.enabled = enabled.equals("1");
        Storage.get().setStoredData(StorageKey.OPEN_API_CONFIG, config);
        sendResponse(ctx, HttpStatus.OK);
    };

    public Handler getInterfaceEnabled = ctx -> {
        final String interfaceName = ctx.pathParam("interfaceName");
        if(!OpenAPIConfiguration.isValidInterfaceName(interfaceName)) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Unknown interface name.");
            return;
        }

        ensureInterfaceConfig();

        Boolean enabled = config.interfaces.get(interfaceName);
        if(enabled == null) {
            enabled = true;
            config.interfaces.put(interfaceName, true);
            Storage.get().setStoredData(StorageKey.OPEN_API_CONFIG, config);
        }

        HashMap<String, Object> obj = new HashMap<>();
        obj.put("enabled", enabled);
        sendResponse(ctx, obj);
    };

    public Handler toggleInterface = ctx -> {
        final String interfaceName = ctx.pathParam("interfaceName");
        if(!OpenAPIConfiguration.isValidInterfaceName(interfaceName)) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Unknown interface name.");
            return;
        }

        final String enabled = ctx.queryParam("enabled");
        if(enabled == null) {
            sendResponse(ctx, HttpStatus.BAD_REQUEST, "Status is missing.");
            return;
        }

        ensureInterfaceConfig();

        config.interfaces.put(interfaceName, enabled.equals("1"));
        Storage.get().setStoredData(StorageKey.OPEN_API_CONFIG, config);
        sendResponse(ctx, HttpStatus.OK);
    };

    private void ensureInterfaceConfig() {
        if(config == null) {
            config = new OpenAPIConfiguration(false, OpenAPIConfiguration.createDefaultInterfaces());
        }
        if(config.interfaces == null) {
            config.interfaces = OpenAPIConfiguration.createDefaultInterfaces();
            Storage.get().setStoredData(StorageKey.OPEN_API_CONFIG, config);
        }
    }
}
