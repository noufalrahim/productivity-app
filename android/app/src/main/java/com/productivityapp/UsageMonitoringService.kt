package com.productivityapp; // Replace with your actual package name

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.provider.Settings;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStatsManager;

class UsageMonitoringService : Service() {
    private val handler = Handler()
    private val monitorRunnable = object : Runnable {
        override fun run() {
            monitorAppUsage()
            handler.postDelayed(this, 5000) // Check every 5 seconds
        }
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        handler.post(monitorRunnable) // Start monitoring when service is started
        return START_STICKY
    }

    private fun monitorAppUsage() {
        val usageStatsManager = getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
        val time = System.currentTimeMillis()
        val events = usageStatsManager.queryEvents(time - 10000, time)

        val event = UsageEvents.Event()
        while (events.hasNextEvent()) {
            events.getNextEvent(event)
            println("Event: ${event.packageName}")
            if (event.packageName == "com.whatsapp") {
                println("Opened WhatsApp")
                // WhatsApp is opened
                redirectToYourApp()
                break
            }
        }
    }

    private fun redirectToYourApp() {
        val intent = packageManager.getLaunchIntentForPackage("com.productivityapp.package")
        intent?.let {
            startActivity(it)  // Redirect to your app
        }
    }

    override fun onBind(intent: Intent?): IBinder? {
        return null
    }
}
