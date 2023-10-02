"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4515],{7207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(8209);const i={sidebar_position:3},o="Plugins",l={unversionedId:"reference/plugins",id:"reference/plugins",title:"Plugins",description:"Plugins can be used to integrate various devices and external data sources into evcc. These can be used through the custom value of the type parameter in meter (power meters), charger (charging stations), or vehicle (vehicles).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/plugins.md",sourceDirName:"reference",slug:"/reference/plugins",permalink:"/en/docs/reference/plugins",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"modbusproxy",permalink:"/en/docs/reference/configuration/modbusproxy"},next:{title:"Modbus",permalink:"/en/docs/reference/modbus"}},s={},p=[{value:"Modbus (read/write)",id:"modbus-readwrite",level:2},{value:"MQTT (read/write)",id:"mqtt-readwrite",level:2},{value:"HTTP (read/write)",id:"http-readwrite",level:2},{value:"Websocket (read only)",id:"websocket-read-only",level:2},{value:"SMA/Speedwire (read only)",id:"smaspeedwire-read-only",level:2},{value:"Javascript (read/write)",id:"javascript-readwrite",level:2},{value:"Shell Script (read/write)",id:"shell-script-readwrite",level:2},{value:"Const (read only)",id:"const-read-only",level:2},{value:"Calc (read only)",id:"calc-read-only",level:2},{value:"Combined Status (read only)",id:"combined-status-read-only",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Plugins can be used to integrate various devices and external data sources into evcc. These can be used through the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," parameter in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/meters#custom"},(0,r.kt)("inlineCode",{parentName:"a"},"meter"))," (power meters), ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/chargers#type"},(0,r.kt)("inlineCode",{parentName:"a"},"charger"))," (charging stations), or ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/vehicles#custom"},(0,r.kt)("inlineCode",{parentName:"a"},"vehicle"))," (vehicles)."),(0,r.kt)("p",null,"Plugins allow both ",(0,r.kt)("em",{parentName:"p"},"write access")," and ",(0,r.kt)("em",{parentName:"p"},"read access"),". When the plugin is used for ",(0,r.kt)("em",{parentName:"p"},"writing"),", the data is provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"${var[:format]}")," format. If ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is not specified, the data is provided in the default ",(0,r.kt)("inlineCode",{parentName:"p"},"%v")," ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/fmt/"},"Go Format"),". The variables are replaced with their corresponding values before the plugin is executed."),(0,r.kt)("h2",{id:"modbus-readwrite"},"Modbus (read/write)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"modbus")," plugin can read data from any Modbus-capable device or SunSpec-compatible inverter. Many power meters are already pre-configured (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd#supported-devices"},"MBMD Supported Devices"),"). It is also possible to write Modbus registers to integrate additional charging stations."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"modbus"},"Modbus Documentation"),"."),(0,r.kt)("h2",{id:"mqtt-readwrite"},"MQTT (read/write)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mqtt")," plugin allows reading values via MQTT topics. This is particularly useful for power meters, for example, if they already provide their data via MQTT.\nRefer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd"},"MBMD")," for an example of how to get Modbus measurement data into MQTT. The plugin also offers the ability to read or parse JSON data structures using jq-like queries (See ",(0,r.kt)("a",{parentName:"p",href:"#http-readwrite"},"HTTP plugin"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/sdm1-1/Power\ntimeout: 30s # don't accept values older than timeout\nscale: 0.001 # floating point factor applied to result, e.g. for converting Wh to kWh\n")),(0,r.kt)("p",null,"For write access, the data is provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," attribute. If this parameter is missing from the configuration, the value is written in the default format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of writing to a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/charger/maxcurrent\npayload: ${var:%d}\n")),(0,r.kt)("h2",{id:"http-readwrite"},"HTTP (read/write)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," plugin performs HTTP calls to read or update data. It also includes the ability to read or parse JSON data structures using jq queries (e.g., for REST APIs)."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"XML documents are automatically converted to JSON format internally, which can then be filtered like a native JSON response using jq. Attributes are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"attr"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For testing jq queries, tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.jsonquerytool.com/"},"https://www.jsonquerytool.com/")," for JSON queries and ",(0,r.kt)("a",{parentName:"p",href:"https://regex101.com/"},"https://regex101.com/")," for regular expression tests can be helpful.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: http\nuri: https://volkszaehler/api/data/<uuid>.json?from=now\nmethod: GET # default HTTP method\nheaders:\n  - content-type: application/json\nauth: # basic authorisation\n  type: basic\n  user: foo\n  password: bar\ninsecure: false # set to true to trust self-signed certificates\njq: .data.tuples[0][1] # parse response json\nscale: 0.001 # floating point factor applied to result, e.g. for converting kW to W\ntimeout: 10s # timeout in golang duration format, see https://golang.org/pkg/time/#ParseDuration\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of writing to a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"body: %v # only applicable for PUT or POST requests\n")),(0,r.kt)("h2",{id:"websocket-read-only"},"Websocket (read only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket")," plugin provides a WebSocket listener. It also includes the ability to read or parse JSON data structures using jq-like queries. This can be used, for example, to receive data from Volksz\xe4hler's push server."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source: http\nuri: ws://<volkszaehler host:port>/socket\njq: .data | select(.uuid=="<uuid>") .tuples[0][1] # parse message json\nscale: 0.001 # floating point factor applied to result, e.g. for converting Wh to kWh\ntimeout: 30s # error if no update received in 30 seconds\n')),(0,r.kt)("h2",{id:"smaspeedwire-read-only"},"SMA/Speedwire (read only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sma")," plugin provides an interface to SMA devices that support the Speedwire protocol."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source: sma\nuri: 192.168.4.51 # alternative to serial\nserial: 123456 # alternative to uri\nvalue: ActivePowerPlus # ID of value to read\npassword: "0000" # optional (default: 0000)\ninterface: eth0 # optional\nscale: 1 # optional scale factor for value\n')),(0,r.kt)("p",null,"Supported values for ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," can be found in the diagnostic output using the ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc meter")," command (with configured SMA ",(0,r.kt)("inlineCode",{parentName:"p"},"meter")," devices)."),(0,r.kt)("p",null,"All possible values can be found as constants ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/bboehmke/sunny/-/blob/master/values.go#L24"},"here")," (use the constant name for ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),")."),(0,r.kt)("h2",{id:"javascript-readwrite"},"Javascript (read/write)"),(0,r.kt)("p",null,"evcc integrates a Javascript interpreter with the ",(0,r.kt)("a",{parentName:"p",href:"https://underscorejs.org"},"Underscore.js")," library, which is directly accessible through ",(0,r.kt)("inlineCode",{parentName:"p"},"_."),", e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"_.random(0,5)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," plugin can execute JavaScript code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," parameter. Very helpful for quickly creating prototypes:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: js\nscript: |\n  var res = 500;\n  2 * res; // returns 1000\n")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," plugin is used for writing, the value to be written is passed to the script as a variable:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of writing to a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"charger:\n  - type: custom\n    maxcurrent:\n      source: js\n      script: |\n        console.log(maxcurrent);\n")),(0,r.kt)("h2",{id:"shell-script-readwrite"},"Shell Script (read/write)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," plugin executes external scripts to read or update data. The plugin is useful for integrating any kind of external functionality."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source: script\ncmd: /bin/bash -c "cat /dev/urandom"\ntimeout: 5s\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of writing to a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: script\ncmd: /home/user/my-script.sh ${enable:%b} # format boolean enable as 0/1\ntimeout: 5s\n")),(0,r.kt)("h2",{id:"const-read-only"},"Const (read only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," plugin returns a constant value. It is suitable, for example, to apply fixed correction values (offsets) to a variable value using the ",(0,r.kt)("inlineCode",{parentName:"p"},"calc")," plugin, or to simulate measurement and status values for testing purposes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: const\nvalue: -16247\n")),(0,r.kt)("h2",{id:"calc-read-only"},"Calc (read only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"calc")," plugin allows for further processing of multiple individual values mathematically:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: calc\nadd:\n- source: ...\n  ...\n- source: ...\n  ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: calc\nmul:\n- source\n\n: calc\n  sign:\n    source: ... (power)\n  ...\n- source: ... (current)\n  ...\n")),(0,r.kt)("p",null,"The basic arithmetic operations of addition (add) and multiplication (mul) are supported as operands."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"scale: -1"),", a simple subtraction can be performed, and with ",(0,r.kt)("inlineCode",{parentName:"p"},"scale: 0.001"),", division can be used, for example, to convert kWh to Wh."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"sign:")," (every positive number becomes +1, every negative number becomes -1, 0 remains 0), signs can be transferred to other values (in conjunction with ",(0,r.kt)("inlineCode",{parentName:"p"},"mul"),'). For example, to transfer the "direction" of power (injection or consumption) to the measured currents.'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"calc")," plugin is helpful for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Summing power values from individual PV strings (addition)"),(0,r.kt)("li",{parentName:"ul"},"Calculating apparent power from voltage and current (multiplication)"),(0,r.kt)("li",{parentName:"ul"},"Combining separate power values for import and export into a signed single value (subtraction)"),(0,r.kt)("li",{parentName:"ul"},"Calculating percentage fill levels (division)"),(0,r.kt)("li",{parentName:"ul"},"Determining the correct direction of current flow (sign)"),(0,r.kt)("li",{parentName:"ul"},"Eliminating known offsets (addition with ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," plugin)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Constant auxiliary values (e.g., for offsets) can be generated as operands using the ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," plugin.")),(0,r.kt)("h2",{id:"combined-status-read-only"},"Combined Status (read only)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"combined")," status plugin is used to convert mixed boolean status values of ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugged")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Charging")," into an evcc-compatible charging status of A..F. It is used, for example, with the OpenWB MQTT integration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of reading from a device"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: combined\nplugged:\n  source: mqtt\n  topic: openWB/lp/1/boolPlugStat\ncharging:\n  source: mqtt\n  topic: openWB/lp/1/boolChargeStat\n")))}c.isMDXComponent=!0}}]);