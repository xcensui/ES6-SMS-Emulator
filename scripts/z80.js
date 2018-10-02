class z80 {
	constructor() {
		this.setup();
	}

	setup() {
		this.vdp = new vdp(); // Visual display processor
		this.psg = new psg(); // Sound processor
	}
}