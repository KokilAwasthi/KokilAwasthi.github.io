/*
 * 
 * UI5Strap
 *
 * ui5strap.ProgressRenderer
 * 
 * @author Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Homepage: http://ui5strap.com
 *
 * Copyright (c) 2013-2014 Jan Philipp Knöller <info@pksoftware.de>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

sap.ui.define(['jquery.sap.global'], function(jQuery) {

	var ProgressRenderer = {};

	ProgressRenderer.render = function(rm, oControl) {
		var items = oControl.getBars();

		rm.write("<div");
		rm.writeControlData(oControl);
		rm.addClass(oControl._getStyleClass());
		rm.writeClasses();
		rm.write(">");
		
		for(var i = 0; i < items.length; i++){
			rm.renderControl(items[i]);
		}
		
		rm.write("</div>");
	};

	return ProgressRenderer;
}, true);
