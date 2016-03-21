/*
 * 
 * PrettyPrint Wrapper
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

	jQuery.sap.declare("com__ui5strap__ui5utils.PrettyPrint");
	jQuery.sap.require("sap.ui.core.Control");
	
	if(typeof PR === 'undefined'){
		jQuery.sap.require("com__ui5strap__ui5utils.prettify.run_prettify");
	}
	
	sap.ui.core.Control.extend("com__ui5strap__ui5utils.PrettyPrint", {
		metadata : {

			// ---- object ----
			defaultAggregation : "content",
			// ---- control specific ----
			library : "com__ui5strap__ui5utils",
			
			properties : {
				source : null
			},
			
			aggregations : {
				content : {
					singularName : "content"
				}
			}

		}
	});

	com__ui5strap__ui5utils.PrettyPrint.prototype.onAfterRendering = function() {
		PR.prettyPrint();
	};

}());