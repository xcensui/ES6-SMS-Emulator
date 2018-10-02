class SMS {
	constructor() {
		this.setup();
	}

	setup() {
		this.z80 = new z80(); // z80 processor

		this.reset();
	}

	reset() {
		this.z80.reset();
	}
}