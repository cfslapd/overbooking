window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":1080,"height":1920,"resume":false,"background":{"type":"swf","imagedata":{"assetId":40,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5qMdull6Zxa","actionGroups":{"ReviewInt_6oMEpHSD3eE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fezAHF6pWV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"68kezBEYZVq"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5g8w7fBqAut.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oMEpHSD3eE_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oMEpHSD3eE_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6oMEpHSD3eE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fezAHF6pWV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"68kezBEYZVq"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6oMEpHSD3eE":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6oMEpHSD3eE"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6oMEpHSD3eE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fezAHF6pWV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"68kezBEYZVq"},"enabled":{"type":"boolean","value":false}}]},"6oMEpHSD3eE_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6G4be9SRRFC","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5g8w7fBqAut.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5xXZweTUcl1.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6oMEpHSD3eE"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5g8w7fBqAut.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5g8w7fBqAut.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6oMEpHSD3eE"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5qMdull6Zxa":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_5qMdull6Zxa":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_61ODzfeepEJ","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_61ODzfeepEJ","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6G4be9SRRFC","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6G4be9SRRFC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6oMEpHSD3eE"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6G4be9SRRFC","typea":"var","valueb":"5xXZweTUcl1","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5xXZweTUcl1.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6oMEpHSD3eE"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5xXZweTUcl1.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6oMEpHSD3eE"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6oMEpHSD3eE_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6G4be9SRRFC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6oMEpHSD3eE","typea":"var","valueb":"5xXZweTUcl1","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5xXZweTUcl1"},"completed_slide_ref":{"type":"string","value":"_player.5WNAHCDbxfb.5vFYjk1td1T"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6G4be9SRRFC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6oMEpHSD3eE","typea":"var","valueb":"5xXZweTUcl1","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5xXZweTUcl1"},"completed_slide_ref":{"type":"string","value":"_player.5WNAHCDbxfb.5vFYjk1td1T"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5qMdull6Zxa"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5qMdull6Zxa"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":43136,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fezAHF6pWV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5sTrT7Oao6n"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cJ4kPn0mzQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68kezBEYZVq"}}]}]},"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Ni9dvCnvPb_-2143311534","id":"01","linkId":"txt__default_5fezAHF6pWV","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":834,"height":271,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"TRUE\\r","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":60,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":74.88,"descent":22.4,"leading":0,"underlinePosition":-6,"underlineThickness":4,"xHeight":39.6}},{"text":"Automatic na dapat i-delay","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":32,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":39.936,"descent":11.947,"leading":0,"underlinePosition":-3.2,"underlineThickness":2.133,"xHeight":21.12}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":31,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":170.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":128,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":42.667,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":703,"bottom":216,"pngfb":false,"pr":{"l":"Lib","i":279}}}],"shapemaskId":"","xPos":119,"yPos":898,"tabIndex":3,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":427,"rotateYPos":140.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":854,"bottom":281,"altText":"TRUE\\rAutomatic na dapat i-delay","pngfb":false,"pr":{"l":"Lib","i":277}},"html5data":{"xPos":0,"yPos":0,"width":854,"height":281,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":854,"bottom":281,"altText":"TRUE\\rAutomatic na dapat i-delay","pngfb":false,"pr":{"l":"Lib","i":278}},"html5data":{"xPos":-1,"yPos":-1,"width":855,"height":282,"strokewidth":0}}}],"width":854,"height":281,"resume":true,"useHandCursor":true,"id":"5fezAHF6pWV","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.68kezBEYZVq.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.68kezBEYZVq._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.68kezBEYZVq"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.68kezBEYZVq.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5g8w7fBqAut"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_61ODzfeepEJ.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Aq0PLhIfDt_756623514","id":"01","linkId":"txt__default_68kezBEYZVq","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":834,"height":260,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"FALSE\\r","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":60,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":74.88,"descent":22.4,"leading":0,"underlinePosition":-6,"underlineThickness":4,"xHeight":39.6}},{"text":"Tumawag dapat at hintayin ang\\radvise ng dispatcher","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":32,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":39.936,"descent":11.947,"leading":0,"underlinePosition":-3.2,"underlineThickness":2.133,"xHeight":21.12}}],"style":{"lineSpacing":17.4,"tagType":"P"},"runs":[{"idx":0,"len":56,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":170.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":128,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":42.667,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":747,"bottom":225,"pngfb":false,"pr":{"l":"Lib","i":282}}}],"shapemaskId":"","xPos":113,"yPos":1242,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":427,"rotateYPos":135,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":854,"bottom":270,"altText":"FALSE\\rTumawag dapat at hintayin ang\\radvise ng dispatcher","pngfb":false,"pr":{"l":"Lib","i":280}},"html5data":{"xPos":0,"yPos":0,"width":854,"height":270,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":854,"bottom":270,"altText":"FALSE\\rTumawag dapat at hintayin ang\\radvise ng dispatcher","pngfb":false,"pr":{"l":"Lib","i":281}},"html5data":{"xPos":-1,"yPos":-1,"width":855,"height":271,"strokewidth":0}}}],"width":854,"height":270,"resume":true,"useHandCursor":true,"id":"68kezBEYZVq","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5fezAHF6pWV.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5fezAHF6pWV._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5fezAHF6pWV"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.5fezAHF6pWV.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5g8w7fBqAut"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_61ODzfeepEJ.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5sTrT7Oao6n_-1532087800","id":"01","linkId":"txt__default_5sTrT7Oao6n","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":973,"height":312,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Kapag sinabihan na ang Dispatcher na may","style":{"fontFamily":"\\"FS Elliot ProBold CBold80F95DDD\\",\\"FS Elliot Pro\\"","fontSize":48,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","ascent":59.904,"descent":17.92,"leading":0,"underlinePosition":-4.8,"underlineThickness":3.2,"xHeight":31.36}},{"text":" Work Orders na hindi mapupuntahan, \\rmaaari nang i-delay","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":48,"fontIsBold":false,"foregroundColor":"#11579C","linkColor":"#11579C","ascent":59.904,"descent":17.92,"leading":0,"underlinePosition":-4.8,"underlineThickness":3.2,"xHeight":31.68}},{"text":" ang Work Orders. ","style":{"fontFamily":"\\"FS Elliot ProBold CBold80F95DDD\\",\\"FS Elliot Pro\\"","fontSize":48,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","ascent":59.904,"descent":17.92,"leading":0,"underlinePosition":-4.8,"underlineThickness":3.2,"xHeight":31.36}}],"style":{"justification":"center","lineSpacing":16,"tagType":"P"},"runs":[{"idx":0,"len":114,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":170.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":128,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":42.667,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":-7,"right":989,"bottom":320,"pngfb":false,"pr":{"l":"Lib","i":284}}}],"shapemaskId":"","xPos":44,"yPos":484,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":496.5,"rotateYPos":161,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-7,"right":993,"bottom":322,"altText":"Kapag sinabihan na ang Dispatcher na may Work Orders na hindi mapupuntahan, \\rmaaari nang i-delay ang Work Orders. ","pngfb":false,"pr":{"l":"Lib","i":283}},"html5data":{"xPos":0,"yPos":0,"width":993,"height":322,"strokewidth":0}},"width":993,"height":322,"resume":false,"useHandCursor":true,"id":"5sTrT7Oao6n"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cJ4kPn0mzQ_-576361892","id":"01","linkId":"txt__default_5cJ4kPn0mzQ","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":552,"height":99,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True or False","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":54,"foregroundColor":"#030303","linkColor":"#030303","ascent":67.392,"descent":20.16,"leading":0,"underlinePosition":-5.4,"underlineThickness":3.6,"xHeight":35.64}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":13,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":170.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":128,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":42.667,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":507,"bottom":99,"pngfb":false,"pr":{"l":"Lib","i":286}}}],"shapemaskId":"","xPos":254,"yPos":319,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":286,"rotateYPos":54.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":572,"bottom":109,"altText":"True or False","pngfb":false,"pr":{"l":"Lib","i":285}},"html5data":{"xPos":0,"yPos":0,"width":572,"height":109,"strokewidth":0}},"width":572,"height":109,"resume":false,"useHandCursor":true,"id":"5cJ4kPn0mzQ"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6oMEpHSD3eE_CorrectReview","id":"01","linkId":"6oMEpHSD3eE_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":582,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":288}}}],"shapemaskId":"","xPos":0,"yPos":1880,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1080,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":287}},"html5data":{"xPos":1,"yPos":1,"width":1077,"height":37,"strokewidth":2}},"width":1080,"height":40,"resume":false,"useHandCursor":true,"id":"6oMEpHSD3eE_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6oMEpHSD3eE_IncorrectReview","id":"01","linkId":"6oMEpHSD3eE_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":591,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":290}}}],"shapemaskId":"","xPos":0,"yPos":1880,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1080,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":289}},"html5data":{"xPos":1,"yPos":1,"width":1077,"height":37,"strokewidth":2}},"width":1080,"height":40,"resume":false,"useHandCursor":true,"id":"6oMEpHSD3eE_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');