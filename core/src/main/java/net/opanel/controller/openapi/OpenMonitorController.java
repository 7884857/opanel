package net.opanel.controller.openapi;

import io.javalin.http.Handler;
import net.opanel.OPanel;
import net.opanel.controller.BaseController;
import net.opanel.time.TPS;
import net.opanel.utils.MonitorUtility.CpuSampler;
import oshi.SystemInfo;

import java.util.HashMap;

import static net.opanel.utils.MonitorUtility.getMemoryRate;

public class OpenMonitorController extends BaseController {
    private final SystemInfo si = new SystemInfo();
    private final CpuSampler cpuSampler = new CpuSampler(si);

    public OpenMonitorController(OPanel plugin) {
        super(plugin);
    }

    public Handler getMonitor = ctx -> {
        HashMap<String, Object> obj = new HashMap<>();
        obj.put("cpu", cpuSampler.sampleRate());
        obj.put("memory", getMemoryRate(si));
        obj.put("tps", TPS.getRecentTPS());

        sendResponse(ctx, obj);
    };
}
