var hotkeyList = [
	{ label: 'A', id: 'OBS_KEY_A' },
	{ label: 'B', id: 'OBS_KEY_B' },
	{ label: 'C', id: 'OBS_KEY_C' },
	{ label: 'D', id: 'OBS_KEY_D' },
	{ label: 'E', id: 'OBS_KEY_E' },
	{ label: 'F', id: 'OBS_KEY_F' },
	{ label: 'G', id: 'OBS_KEY_G' },
	{ label: 'H', id: 'OBS_KEY_H' },
	{ label: 'I', id: 'OBS_KEY_I' },
	{ label: 'J', id: 'OBS_KEY_J' },
	{ label: 'K', id: 'OBS_KEY_K' },
	{ label: 'L', id: 'OBS_KEY_L' },
	{ label: 'M', id: 'OBS_KEY_M' },
	{ label: 'N', id: 'OBS_KEY_N' },
	{ label: 'O', id: 'OBS_KEY_O' },
	{ label: 'P', id: 'OBS_KEY_P' },
	{ label: 'Q', id: 'OBS_KEY_Q' },
	{ label: 'R', id: 'OBS_KEY_R' },
	{ label: 'S', id: 'OBS_KEY_S' },
	{ label: 'T', id: 'OBS_KEY_T' },
	{ label: 'U', id: 'OBS_KEY_U' },
	{ label: 'V', id: 'OBS_KEY_V' },
	{ label: 'W', id: 'OBS_KEY_W' },
	{ label: 'X', id: 'OBS_KEY_X' },
	{ label: 'Y', id: 'OBS_KEY_Y' },
	{ label: 'Z', id: 'OBS_KEY_Z' },
	{ label: '0', id: 'OBS_KEY_0' },
	{ label: '1', id: 'OBS_KEY_1' },
	{ label: '2', id: 'OBS_KEY_2' },
	{ label: '3', id: 'OBS_KEY_3' },
	{ label: '4', id: 'OBS_KEY_4' },
	{ label: '5', id: 'OBS_KEY_5' },
	{ label: '6', id: 'OBS_KEY_6' },
	{ label: '7', id: 'OBS_KEY_7' },
	{ label: '8', id: 'OBS_KEY_8' },
	{ label: '9', id: 'OBS_KEY_9' },
	{ label: 'Return', id: 'OBS_KEY_RETURN' },
	{ label: 'Enter', id: 'OBS_KEY_ENTER' },
	{ label: 'Escape', id: 'OBS_KEY_ESCAPE' },
	{ label: 'Tab', id: 'OBS_KEY_TAB' },
	{ label: 'Backtab', id: 'OBS_KEY_BACKTAB' },
	{ label: 'Backspace', id: 'OBS_KEY_BACKSPACE' },
	{ label: 'Insert', id: 'OBS_KEY_INSERT' },
	{ label: 'Delete', id: 'OBS_KEY_DELETE' },
	{ label: 'Pause', id: 'OBS_KEY_PAUSE' },
	{ label: 'Print', id: 'OBS_KEY_PRINT' },
	{ label: 'Sysreq', id: 'OBS_KEY_SYSREQ' },
	{ label: 'Clear', id: 'OBS_KEY_CLEAR' },
	{ label: 'Home', id: 'OBS_KEY_HOME' },
	{ label: 'End', id: 'OBS_KEY_END' },
	{ label: 'Left', id: 'OBS_KEY_LEFT' },
	{ label: 'Up', id: 'OBS_KEY_UP' },
	{ label: 'Right', id: 'OBS_KEY_RIGHT' },
	{ label: 'Down', id: 'OBS_KEY_DOWN' },
	{ label: 'Page Up', id: 'OBS_KEY_PAGEUP' },
	{ label: 'Page Down', id: 'OBS_KEY_PAGEDOWN' },
	{ label: 'Shift', id: 'OBS_KEY_SHIFT' },
	{ label: 'Control', id: 'OBS_KEY_CONTROL' },
	{ label: 'Meta', id: 'OBS_KEY_META' },
	{ label: 'Alt', id: 'OBS_KEY_ALT' },
	{ label: 'Alt Graph', id: 'OBS_KEY_ALTGR' },
	{ label: 'Caps Lock', id: 'OBS_KEY_CAPSLOCK' },
	{ label: 'Num Lock', id: 'OBS_KEY_NUMLOCK' },
	{ label: 'Scroll Lock', id: 'OBS_KEY_SCROLLLOCK' },
	{ label: 'F1', id: 'OBS_KEY_F1' },
	{ label: 'F2', id: 'OBS_KEY_F2' },
	{ label: 'F3', id: 'OBS_KEY_F3' },
	{ label: 'F4', id: 'OBS_KEY_F4' },
	{ label: 'F5', id: 'OBS_KEY_F5' },
	{ label: 'F6', id: 'OBS_KEY_F6' },
	{ label: 'F7', id: 'OBS_KEY_F7' },
	{ label: 'F8', id: 'OBS_KEY_F8' },
	{ label: 'F9', id: 'OBS_KEY_F9' },
	{ label: 'F10', id: 'OBS_KEY_F10' },
	{ label: 'F11', id: 'OBS_KEY_F11' },
	{ label: 'F12', id: 'OBS_KEY_F12' },
	{ label: 'F13', id: 'OBS_KEY_F13' },
	{ label: 'F14', id: 'OBS_KEY_F14' },
	{ label: 'F15', id: 'OBS_KEY_F15' },
	{ label: 'F16', id: 'OBS_KEY_F16' },
	{ label: 'F17', id: 'OBS_KEY_F17' },
	{ label: 'F18', id: 'OBS_KEY_F18' },
	{ label: 'F19', id: 'OBS_KEY_F19' },
	{ label: 'F20', id: 'OBS_KEY_F20' },
	{ label: 'F21', id: 'OBS_KEY_F21' },
	{ label: 'F22', id: 'OBS_KEY_F22' },
	{ label: 'F23', id: 'OBS_KEY_F23' },
	{ label: 'F24', id: 'OBS_KEY_F24' },
	{ label: 'F25', id: 'OBS_KEY_F25' },
	{ label: 'F26', id: 'OBS_KEY_F26' },
	{ label: 'F27', id: 'OBS_KEY_F27' },
	{ label: 'F28', id: 'OBS_KEY_F28' },
	{ label: 'F29', id: 'OBS_KEY_F29' },
	{ label: 'F30', id: 'OBS_KEY_F30' },
	{ label: 'F31', id: 'OBS_KEY_F31' },
	{ label: 'F32', id: 'OBS_KEY_F32' },
	{ label: 'F33', id: 'OBS_KEY_F33' },
	{ label: 'F34', id: 'OBS_KEY_F34' },
	{ label: 'F35', id: 'OBS_KEY_F35' },
	{ label: 'Menu', id: 'OBS_KEY_MENU' },
	{ label: 'Hyper L', id: 'OBS_KEY_HYPER_L' },
	{ label: 'Hyper R', id: 'OBS_KEY_HYPER_R' },
	{ label: 'Help', id: 'OBS_KEY_HELP' },
	{ label: 'Direction L', id: 'OBS_KEY_DIRECTION_L' },
	{ label: 'Direction R', id: 'OBS_KEY_DIRECTION_R' },
	{ label: 'Space', id: 'OBS_KEY_SPACE' },
	{ label: '! (Exlamation Mark)', id: 'OBS_KEY_EXCLAM' },
	{ label: '# (Number Sign)', id: 'OBS_KEY_NUMBERSIGN' },
	{ label: '$ (Dollar Sign)', id: 'OBS_KEY_DOLLAR' },
	{ label: '% (Percent)', id: 'OBS_KEY_PERCENT' },
	{ label: '& (Ampersand)', id: 'OBS_KEY_AMPERSAND' },
	{ label: '\' (Apostrophe)', id: 'OBS_KEY_APOSTROPHE' },
	{ label: '( (Parenthesis Left)', id: 'OBS_KEY_PARENLEFT' },
	{ label: ') (Parenthesis Right)', id: 'OBS_KEY_PARENRIGHT' },
	{ label: '* (Asterisk)', id: 'OBS_KEY_ASTERISK' },
	{ label: '+ (Plus)', id: 'OBS_KEY_PLUS' },
	{ label: ', (Comma)', id: 'OBS_KEY_COMMA' },
	{ label: '- (Minus)', id: 'OBS_KEY_MINUS' },
	{ label: '. (Period)', id: 'OBS_KEY_PERIOD' },
	{ label: '/ (Slash)', id: 'OBS_KEY_SLASH' },
	{ label: 'Numpad = (Equals)', id: 'OBS_KEY_NUMEQUAL' },
	{ label: 'Numpad * (Asterisk)', id: 'OBS_KEY_NUMASTERISK' },
	{ label: 'Numpad + (Plus)', id: 'OBS_KEY_NUMPLUS' },
	{ label: 'Numpad , (Comma)', id: 'OBS_KEY_NUMCOMMA' },
	{ label: 'Numpad - (Minus)', id: 'OBS_KEY_NUMMINUS' },
	{ label: 'Numnpad . (Period)', id: 'OBS_KEY_NUMPERIOD' },
	{ label: 'Numpad / (Slash)', id: 'OBS_KEY_NUMSLASH' },
	{ label: 'Numpad 0', id: 'OBS_KEY_NUM0' },
	{ label: 'Numpad 1', id: 'OBS_KEY_NUM1' },
	{ label: 'Numpad 2', id: 'OBS_KEY_NUM2' },
	{ label: 'Numpad 3', id: 'OBS_KEY_NUM3' },
	{ label: 'Numpad 4', id: 'OBS_KEY_NUM4' },
	{ label: 'Numpad 5', id: 'OBS_KEY_NUM5' },
	{ label: 'Numpad 6', id: 'OBS_KEY_NUM6' },
	{ label: 'Numpad 7', id: 'OBS_KEY_NUM7' },
	{ label: 'Numpad 8', id: 'OBS_KEY_NUM8' },
	{ label: 'Numpad 9', id: 'OBS_KEY_NUM9' },
	{ label: ': (Colon)', id: 'OBS_KEY_COLON' },
	{ label: '; (Semicolon)', id: 'OBS_KEY_SEMICOLON' },
	{ label: '\" (Quote)', id: 'OBS_KEY_QUOTE' },
	{ label: '< (Less Than)', id: 'OBS_KEY_LESS' },
	{ label: '= (Equals)', id: 'OBS_KEY_EQUAL' },
	{ label: '> (Greater Than)', id: 'OBS_KEY_GREATER' },
	{ label: '? (Quetion Mark)', id: 'OBS_KEY_QUESTION' },
	{ label: '@ (At)', id: 'OBS_KEY_AT' },
	{ label: '{ (Bracket Left)', id: 'OBS_KEY_BRACKETLEFT' },
	{ label: '\\ (Backslash)', id: 'OBS_KEY_BACKSLASH' },
	{ label: '} (Bracket Right)', id: 'OBS_KEY_BRACKETRIGHT' },
	{ label: 'ASCII CIRCUM', id: 'OBS_KEY_ASCIICIRCUM' },
	{ label: '_ (Underscore)', id: 'OBS_KEY_UNDERSCORE' },
	{ label: 'Quote Left', id: 'OBS_KEY_QUOTELEFT' },
	{ label: '[ (Brace Left)', id: 'OBS_KEY_BRACELEFT' },
	{ label: '| (Bar)', id: 'OBS_KEY_BAR' },
	{ label: '] (Brace Right)', id: 'OBS_KEY_BRACERIGHT' },
	{ label: '` (Dead Grave)', id: 'OBS_KEY_DEAD_GRAVE' }
]

exports.hotkeyList = hotkeyList