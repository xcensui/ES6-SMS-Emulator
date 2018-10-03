class vdp {
	constructor() {
		this.reset();
	}

	reset() {
		this.vRAM = new UInt8Array(new ArrayBuffer(0x4000));
		this.cRAM = new UInt8Array(32);

		this.counters = new UInt16Array(2); // Holds hCounter and vCounter

		this.isSecondWrite = false;
	}

	getHCounter() {
		return this.counters[0];
	}

	getVCounter() {
		return this.counters[1];
	}

	readControlPort() {

	}

	writeControlPort(data) {

	}

	readDataPort() {

	}

	writeDataPort(data) {
		this.isSecondWrite = false;
	}

	writeToScreen(x, y, red, green, blue) {
		writeNormal = true;
		writeMedium = false;
		
		if (writeNormal) {
			this.writeToNormal(x, y, red, green, blue);
		}

		if (writeMedium) {
			this.writeToMedium(x, y, red, green, blue);
		}

		if (!writeNormal && !writeMedium) {
			this.writeToHigh(x, y, red, green, blue);
		}
	}

	writeToNormal(x, y, red, green, blue) {

	}

	writeToMedium(x, y, red, green, blue) {

	}

	writeToHigh(x, y, red, green, blue) {

	}
}