---
title: Thread Sensor Tag
include_footer: true
---

#### What is it?
The Thread Sensor Tag is a low power sensor to measure pressure, temperature, humidity and light in a very small form factor running on a coin-cell battery for ~3 years. It uses OpenThread as a network and sends an MQTT* message every 20s with all informations incl. the battery status. 

**Features:**

- nRF52840 on a MS88SF2 module
- Light sensor VEMLS6030 @0x48
- MS8607 with relative humidity @0x40, pressure and temperature @0x76
- RGB LED

<img src="https://media.discordapp.net/attachments/749711554894889142/873851530602754138/2021-08-08_10h53_47.png" alt="isolated" width="500"/>


| Period |  Average Current  | 
| -------- | :--------: |
| deep sleep | 3.19µA |
| sensors acquisition| 54 µA | 
| wakeup cycle 1.7 sec including RF| 125 µA |  

#### Why did you make it?
We try to make OpenThread more available to the community because we think it is a great step into connecting devices and smart homes.

#### What makes it special?
It is open source and runs on the OpenThread network which isn't yet available everywhere but will be in the future. Apple and Google already preparing there Devices to be ready to connect. 

*MQTT: The Device/Firmware does not send MQTT but UDP packets. It is cheaper in terms of resources and speed which is important to safe some energy. Matter and MQTT would just create an overhead. But we have a python script which you can run on the Border Router to receive the UDP Packets and translates them into a MQTT message. 

A friend, Fabian Baumann, from Formfjord did a great job and made us a 3D printed case for the sensor and even took fancy looking images, see: [Formfjord Thread Sensor Tag Case](http://www.formfjord.com/project/threadsensortag)
We will also try and sell some of them incl. the case here - feel free to put them on the waiting list so we know how many we should make. The 3D files are available as well but they are not really suited for normal 3D printing because the case is very tiny. We used Multijet Fusion to make them.

You can find all documentation, code, schematics and 3D files in the links attached.

<div class="column is-one-third">
  <div class="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
    <div class="card-title">
      <h4>Thread Sensor Tag</h4>
    </div>
    <div class="card-icon">
        <img src="/images/illustrations/tst_ff_square.png" alt="isolated"/>
    </div>
    <div class="card-text">
        <p>Sensor for Pressure, Humidity, Temperature and Light</p>
    </div>
    <div class="card-action">
      <a href="https://www.tindie.com/products/informatic0re/thread-sensor-tag/" class="button btn-align-md accent-btn raised">zum Shop</a>
    </div>
  </div>
</div>