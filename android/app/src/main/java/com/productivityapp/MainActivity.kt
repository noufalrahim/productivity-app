package com.productivityapp

import android.os.Bundle
import android.content.Intent
import android.provider.Settings

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "productivityApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Start the usage settings activity
    val intent = Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS)
    startActivity(intent)

    // Start your custom service to monitor app usage
    val serviceIntent = Intent(this, UsageMonitoringService::class.java)
    startService(serviceIntent)
  }
}
