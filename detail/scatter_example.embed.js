console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "53ad513a-2d9d-4529-9926-b53a14962fb7"}, "doc": null, "id": "d7d8bc66-0dbc-4be5-acc3-eb58a3df1d11", "xdata_range": {"type": "DataRange1d", "id": "693066a3-cca6-4a7e-88b8-b2414204adac"}, "ydata_range": {"type": "DataRange1d", "id": "d33792cf-592b-4a42-ab71-3efc087de571"}, "glyphspec": {"line_color": {"value": "#FF00FF"}, "fill_color": {"value": "#FF00FF"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "#FF00FF"}, "angle_units": "deg", "fill_color": {"value": "#FF00FF"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "d7d8bc66-0dbc-4be5-acc3-eb58a3df1d11"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c7e7720d-47d4-480b-8137-34d8513fe1b6"}, "columns": ["y"]}], "id": "00afc09a-717c-45bd-929c-82dd918685dc", "doc": null}, "type": "DataRange1d", "id": "00afc09a-717c-45bd-929c-82dd918685dc"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba"}, {"type": "DataRange1d", "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277"}], "dimensions": ["width", "height"], "doc": null, "id": "7f414d32-eb93-400c-adff-b93eb91c5f55"}, "type": "PanTool", "id": "7f414d32-eb93-400c-adff-b93eb91c5f55"}, {"attributes": {"plot": {"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, "doc": null, "dimension": 0, "id": "1f677c08-1e1d-4c0d-92e1-5ecaa41c488f"}, "type": "Grid", "id": "1f677c08-1e1d-4c0d-92e1-5ecaa41c488f"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12"}, {"type": "DataRange1d", "id": "00afc09a-717c-45bd-929c-82dd918685dc"}], "dimensions": ["width", "height"], "doc": null, "id": "78c30eb8-cb19-4093-be88-0dbac0c12c5c"}, "type": "PanTool", "id": "78c30eb8-cb19-4093-be88-0dbac0c12c5c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b333ded7-5538-4550-8478-b459eb0e680c"}, "columns": ["x"]}], "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2", "doc": null}, "type": "DataRange1d", "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2"}, {"attributes": {"plot": {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, "location": "min", "bounds": "auto", "doc": null, "id": "1e658421-2ef3-46da-9d04-63698dfc6fd2", "dimension": 0}, "type": "LinearAxis", "id": "1e658421-2ef3-46da-9d04-63698dfc6fd2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "53ad513a-2d9d-4529-9926-b53a14962fb7"}, "columns": ["x"]}], "id": "693066a3-cca6-4a7e-88b8-b2414204adac", "doc": null}, "type": "DataRange1d", "id": "693066a3-cca6-4a7e-88b8-b2414204adac"}, {"attributes": {"plot": {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, "doc": null, "dimension": 0, "id": "ad330851-8465-4340-a1e1-77c357d6e579"}, "type": "Grid", "id": "ad330851-8465-4340-a1e1-77c357d6e579"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "22e14ed7-d88b-4df8-b349-384235ccac06"}, "type": "ColumnDataSource", "id": "22e14ed7-d88b-4df8-b349-384235ccac06"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "1e658421-2ef3-46da-9d04-63698dfc6fd2"}, {"type": "LinearAxis", "id": "9211cb3a-c370-4f9c-999a-394cda21d0a4"}, {"type": "Grid", "id": "ad330851-8465-4340-a1e1-77c357d6e579"}, {"type": "Grid", "id": "484a0316-08ff-41d4-9234-00033dc59a4c"}, {"type": "GlyphRenderer", "id": "8a8f1fa8-875d-417d-9f4b-1797cf0635a0"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6", "tools": [{"type": "PanTool", "id": "7bed8e12-ddf3-4e3c-be34-8bbf2758d3ba"}, {"type": "ZoomTool", "id": "066a351f-5625-4412-b479-024ff618b399"}, {"type": "ResizeTool", "id": "81e065eb-c933-45a6-8f9f-6118e4368dd1"}], "canvas_width": 600}, "type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, {"attributes": {"plot": {"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, "id": "0f1e76e6-16bf-4123-89af-b69d5b9fab74", "doc": null}, "type": "ResizeTool", "id": "0f1e76e6-16bf-4123-89af-b69d5b9fab74"}, {"attributes": {"plot": {"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, "location": "min", "bounds": "auto", "doc": null, "id": "74660aea-c2fa-4da2-bd38-d6f3890855c7", "dimension": 1}, "type": "LinearAxis", "id": "74660aea-c2fa-4da2-bd38-d6f3890855c7"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "id": "c5c9fcec-d126-4e9a-8278-7400e40b308e", "doc": null}, "type": "ResizeTool", "id": "c5c9fcec-d126-4e9a-8278-7400e40b308e"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "693066a3-cca6-4a7e-88b8-b2414204adac"}, {"type": "DataRange1d", "id": "d33792cf-592b-4a42-ab71-3efc087de571"}], "dimensions": ["width", "height"], "doc": null, "id": "6851a5fd-824a-4076-ba2d-5606d14dd0f3"}, "type": "PanTool", "id": "6851a5fd-824a-4076-ba2d-5606d14dd0f3"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 1, "id": "9ffecbbf-fc52-414c-ba5d-b064a4827613"}, "type": "Grid", "id": "9ffecbbf-fc52-414c-ba5d-b064a4827613"}, {"attributes": {"plot": {"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, "location": "min", "bounds": "auto", "doc": null, "id": "d750814a-78ca-4282-8020-9218b4356727", "dimension": 0}, "type": "LinearAxis", "id": "d750814a-78ca-4282-8020-9218b4356727"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "22e14ed7-d88b-4df8-b349-384235ccac06"}, "columns": ["x"]}], "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba", "doc": null}, "type": "DataRange1d", "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba"}, {"attributes": {"plot": {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, "doc": null, "dimension": 1, "id": "ab0d2ff5-c380-4a54-a099-dce987eadc06"}, "type": "Grid", "id": "ab0d2ff5-c380-4a54-a099-dce987eadc06"}, {"attributes": {"plot": {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, "location": "min", "bounds": "auto", "doc": null, "id": "9211cb3a-c370-4f9c-999a-394cda21d0a4", "dimension": 1}, "type": "LinearAxis", "id": "9211cb3a-c370-4f9c-999a-394cda21d0a4"}, {"attributes": {"plot": {"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, "doc": null, "dimension": 1, "id": "13421bc7-0bae-4092-9be4-6b36c434ec10"}, "type": "Grid", "id": "13421bc7-0bae-4092-9be4-6b36c434ec10"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "b333ded7-5538-4550-8478-b459eb0e680c"}, "type": "ColumnDataSource", "id": "b333ded7-5538-4550-8478-b459eb0e680c"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "00afc09a-717c-45bd-929c-82dd918685dc"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "c66ed21a-ea08-49e8-b500-070aac79bb35"}, {"type": "LinearAxis", "id": "02e9d865-fbc5-4d76-a7c8-25f8544f0386"}, {"type": "Grid", "id": "a55c8ec5-3412-4de4-9916-63110aaafe39"}, {"type": "Grid", "id": "ab0d2ff5-c380-4a54-a099-dce987eadc06"}, {"type": "GlyphRenderer", "id": "50d62724-9f5b-4294-871c-d85fc5e9e88b"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce", "tools": [{"type": "PanTool", "id": "78c30eb8-cb19-4093-be88-0dbac0c12c5c"}, {"type": "ZoomTool", "id": "38cf06d2-cccf-40f4-a6df-ef56c267c569"}, {"type": "ResizeTool", "id": "e3f66c8e-a2d2-48fc-a5b1-732ed20aecb4"}], "canvas_width": 600}, "type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "53ad513a-2d9d-4529-9926-b53a14962fb7"}, "columns": ["y"]}], "id": "d33792cf-592b-4a42-ab71-3efc087de571", "doc": null}, "type": "DataRange1d", "id": "d33792cf-592b-4a42-ab71-3efc087de571"}, {"attributes": {"plot": {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, "location": "min", "bounds": "auto", "doc": null, "id": "c66ed21a-ea08-49e8-b500-070aac79bb35", "dimension": 0}, "type": "LinearAxis", "id": "c66ed21a-ea08-49e8-b500-070aac79bb35"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "693066a3-cca6-4a7e-88b8-b2414204adac"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "d33792cf-592b-4a42-ab71-3efc087de571"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "d750814a-78ca-4282-8020-9218b4356727"}, {"type": "LinearAxis", "id": "74660aea-c2fa-4da2-bd38-d6f3890855c7"}, {"type": "Grid", "id": "1f677c08-1e1d-4c0d-92e1-5ecaa41c488f"}, {"type": "Grid", "id": "13421bc7-0bae-4092-9be4-6b36c434ec10"}, {"type": "GlyphRenderer", "id": "d7d8bc66-0dbc-4be5-acc3-eb58a3df1d11"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a", "tools": [{"type": "PanTool", "id": "6851a5fd-824a-4076-ba2d-5606d14dd0f3"}, {"type": "ZoomTool", "id": "2f02ec5e-81dd-4203-995d-4ea36f941536"}, {"type": "ResizeTool", "id": "0f1e76e6-16bf-4123-89af-b69d5b9fab74"}], "canvas_width": 600}, "type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, {"attributes": {"plot": {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, "id": "e3f66c8e-a2d2-48fc-a5b1-732ed20aecb4", "doc": null}, "type": "ResizeTool", "id": "e3f66c8e-a2d2-48fc-a5b1-732ed20aecb4"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "693066a3-cca6-4a7e-88b8-b2414204adac"}, {"type": "DataRange1d", "id": "d33792cf-592b-4a42-ab71-3efc087de571"}], "dimensions": ["width", "height"], "id": "2f02ec5e-81dd-4203-995d-4ea36f941536"}, "type": "ZoomTool", "id": "2f02ec5e-81dd-4203-995d-4ea36f941536"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "22e14ed7-d88b-4df8-b349-384235ccac06"}, "columns": ["y"]}], "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277", "doc": null}, "type": "DataRange1d", "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277"}, {"attributes": {"plot": {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, "id": "81e065eb-c933-45a6-8f9f-6118e4368dd1", "doc": null}, "type": "ResizeTool", "id": "81e065eb-c933-45a6-8f9f-6118e4368dd1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c7e7720d-47d4-480b-8137-34d8513fe1b6"}, "columns": ["x"]}], "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12", "doc": null}, "type": "DataRange1d", "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c7e7720d-47d4-480b-8137-34d8513fe1b6"}, "doc": null, "id": "50d62724-9f5b-4294-871c-d85fc5e9e88b", "xdata_range": {"type": "DataRange1d", "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12"}, "ydata_range": {"type": "DataRange1d", "id": "00afc09a-717c-45bd-929c-82dd918685dc"}, "glyphspec": {"line_color": {"value": "green"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "green"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "square", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "50d62724-9f5b-4294-871c-d85fc5e9e88b"}, {"attributes": {"plot": {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, "doc": null, "dimension": 0, "id": "a55c8ec5-3412-4de4-9916-63110aaafe39"}, "type": "Grid", "id": "a55c8ec5-3412-4de4-9916-63110aaafe39"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "73b6cba1-426b-435b-9736-44a1825f43be", "dimension": 1}, "type": "LinearAxis", "id": "73b6cba1-426b-435b-9736-44a1825f43be"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "22e14ed7-d88b-4df8-b349-384235ccac06"}, "doc": null, "id": "a7731805-7cb9-40d5-9bfe-aa342c5f43b2", "xdata_range": {"type": "DataRange1d", "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba"}, "ydata_range": {"type": "DataRange1d", "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277"}, "glyphspec": {"line_color": {"value": "blue"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "blue"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "square", "name": "scatter_example"}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "a7731805-7cb9-40d5-9bfe-aa342c5f43b2"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "2f64931a-e6e5-4ecf-8373-d5e69f0c018a"}, {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, {"type": "Plot", "id": "scatter_example"}], "id": "df957a4b-440e-439e-9345-11122ae6c073"}, "type": "PlotContext", "id": "df957a4b-440e-439e-9345-11122ae6c073"}, {"attributes": {"plot": {"type": "Plot", "id": "62cb0e8b-69de-4472-9230-a6ae87a6ccce"}, "location": "min", "bounds": "auto", "doc": null, "id": "02e9d865-fbc5-4d76-a7c8-25f8544f0386", "dimension": 1}, "type": "LinearAxis", "id": "02e9d865-fbc5-4d76-a7c8-25f8544f0386"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "ba2f0b3e-096a-4fe9-9e25-2bf73a968b0c", "dimension": 0}, "type": "LinearAxis", "id": "ba2f0b3e-096a-4fe9-9e25-2bf73a968b0c"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "ba2f0b3e-096a-4fe9-9e25-2bf73a968b0c"}, {"type": "LinearAxis", "id": "73b6cba1-426b-435b-9736-44a1825f43be"}, {"type": "Grid", "id": "0d3162b8-4a7a-4379-a922-59fd8489517f"}, {"type": "Grid", "id": "9ffecbbf-fc52-414c-ba5d-b064a4827613"}, {"type": "GlyphRenderer", "id": "a7731805-7cb9-40d5-9bfe-aa342c5f43b2"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "scatter_example", "tools": [{"type": "PanTool", "id": "7f414d32-eb93-400c-adff-b93eb91c5f55"}, {"type": "ZoomTool", "id": "246a8f8e-1059-4064-a8ae-e3636b97c048"}, {"type": "ResizeTool", "id": "c5c9fcec-d126-4e9a-8278-7400e40b308e"}], "canvas_width": 600}, "type": "Plot", "id": "scatter_example"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 0, "id": "0d3162b8-4a7a-4379-a922-59fd8489517f"}, "type": "Grid", "id": "0d3162b8-4a7a-4379-a922-59fd8489517f"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "c7e7720d-47d4-480b-8137-34d8513fe1b6"}, "type": "ColumnDataSource", "id": "c7e7720d-47d4-480b-8137-34d8513fe1b6"}, {"attributes": {"plot": {"type": "Plot", "id": "38b815af-31fe-4d6b-90eb-7bd88c4a99e6"}, "doc": null, "dimension": 1, "id": "484a0316-08ff-41d4-9234-00033dc59a4c"}, "type": "Grid", "id": "484a0316-08ff-41d4-9234-00033dc59a4c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b333ded7-5538-4550-8478-b459eb0e680c"}, "columns": ["y"]}], "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854", "doc": null}, "type": "DataRange1d", "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "53ad513a-2d9d-4529-9926-b53a14962fb7"}, "type": "ColumnDataSource", "id": "53ad513a-2d9d-4529-9926-b53a14962fb7"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2"}, {"type": "DataRange1d", "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854"}], "dimensions": ["width", "height"], "doc": null, "id": "7bed8e12-ddf3-4e3c-be34-8bbf2758d3ba"}, "type": "PanTool", "id": "7bed8e12-ddf3-4e3c-be34-8bbf2758d3ba"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2"}, {"type": "DataRange1d", "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854"}], "dimensions": ["width", "height"], "id": "066a351f-5625-4412-b479-024ff618b399"}, "type": "ZoomTool", "id": "066a351f-5625-4412-b479-024ff618b399"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "97e7feba-7f4d-4dfd-b4dd-deaac17cc0ba"}, {"type": "DataRange1d", "id": "d04ed062-26a6-4ad8-ad76-b3edcfe5c277"}], "dimensions": ["width", "height"], "id": "246a8f8e-1059-4064-a8ae-e3636b97c048"}, "type": "ZoomTool", "id": "246a8f8e-1059-4064-a8ae-e3636b97c048"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "4cab24aa-ae23-4d13-8454-69f9e1dddf12"}, {"type": "DataRange1d", "id": "00afc09a-717c-45bd-929c-82dd918685dc"}], "dimensions": ["width", "height"], "id": "38cf06d2-cccf-40f4-a6df-ef56c267c569"}, "type": "ZoomTool", "id": "38cf06d2-cccf-40f4-a6df-ef56c267c569"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b333ded7-5538-4550-8478-b459eb0e680c"}, "doc": null, "id": "8a8f1fa8-875d-417d-9f4b-1797cf0635a0", "xdata_range": {"type": "DataRange1d", "id": "1c6b4a0f-c88b-406e-ab45-66e4a2963ee2"}, "ydata_range": {"type": "DataRange1d", "id": "bdace8fa-1e86-4ecf-af91-6c2557c05854"}, "glyphspec": {"line_color": {"value": "red"}, "fill_color": {"value": "red"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "red"}, "angle_units": "deg", "fill_color": {"value": "red"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "8a8f1fa8-875d-417d-9f4b-1797cf0635a0"}];
    var modeltype = "PlotContext";
    var elementid = "23125ee2-5c47-4bc3-b87b-d494899b535f";
    var plotID = "scatter_example";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));