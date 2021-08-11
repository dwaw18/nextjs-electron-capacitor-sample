export interface WifiBroadCastIpResponse {
  value: string;
}

export interface CustomWifiPlugin {

  /**
   * Return broadcast IP of connected Wi-Fi network.
   *
   * @since 1.0.0
   */
  getWifiBroadcastIp(): Promise<WifiBroadCastIpResponse>;
}
