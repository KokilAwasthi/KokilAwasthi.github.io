/*
 * 
 * PrettyPrint Renderer
 * 
 * Author: Jan Philipp Knöller
 * 
 * Copyright (c) 2013 Philipp Knöller Software
 * 
 * http://pksoftware.de
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */

(function(){

    jQuery.sap.declare("com__ui5strap__ui5utils.PrettyPrintRenderer");

    com__ui5strap__ui5utils.PrettyPrintRenderer = {};

    com__ui5strap__ui5utils.PrettyPrintRenderer.render = function(rm, oControl) {
        rm.write("<pre");
        rm.writeControlData(oControl);
        rm.addClass("prettyprint");
        rm.writeClasses();
        rm.write(">");
        
        var bufferString = '';
        
        var source = oControl.getSource();
        if(source){
            var oBinding = oControl.getBinding('source');
        	if(oBinding){
        		if(typeof oBinding.oValue === "object"){
        			var sObject = JSON.stringify(oBinding.oValue);
        			bufferString += sObject;
        		} else {
        			bufferString += oBinding.oValue;
        		}
        	} else {
        		bufferString += source;
        	}
        	
        } else {
        	var content = oControl.getContent();
        	content.forEach(function(e){
            	if(e._xContent){
            		//XML Views
            		bufferString += e._xContent.innerText.replace(/^\s+|\s+$/g, '');
            	}
            	else{
            		//HTML Views
            		bufferString += jQuery(e.getDomRef()).html();
            	}
            });
        }
        
        var buffer = jQuery(document.createElement("textarea"));
        buffer.html(bufferString);
        
        rm.write(buffer.html());
        
        rm.write("</pre>");
    };

}());
