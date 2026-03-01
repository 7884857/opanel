package net.opanel.controller.openapi;

import io.javalin.http.Handler;
import net.opanel.OPanel;
import net.opanel.controller.BaseController;
import net.opanel.time.TPS;
import oshi.SystemInfo;

import java.util.HashMap;

import static net.opanel.utils.MonitorUtility.*;

public class OpenMonitorController extends BaseController {
    public OpenMonitorController(OPanel plugin) {
        super(plugin);
    }

    public Handler getMonitor = ctx -> {
        SystemInfo si = new SystemInfo();

        HashMap<String, Object> obj = new HashMap<>();
        obj.put("cpu", getCpuRate(si));
        obj.put("memory", getMemoryRate(si));
        obj.put("tps", TPS.getRecentTPS());

        sendResponse(ctx, obj);
    };
}
