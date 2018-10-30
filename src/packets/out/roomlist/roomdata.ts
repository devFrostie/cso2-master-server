import { Uint64LE } from 'int64-buffer'
import { PacketString } from 'packets/packetstring'

import { OutPacketBase } from 'packets/out/packet'

export class RoomListRoomData {
    private id: number
    private flags: Uint64LE
    // flags & 0x1
    private unk00: PacketString
    // end flags & 0x1
    // flags & 0x2
    private unk01: number
    // end flags & 0x2
    // flags & 0x4
    private unk02: number
    // end flags & 0x4
    // flags & 0x8
    private unk03: number
    // end flags & 0x8
    // flags & 0x10
    private gameModeId: number
    // end flags & 0x10
    // flags & 0x20
    private mapId: number
    // end flags & 0x20
    // flags & 0x40
    private unk06: number
    // end flags & 0x40
    // flags & 0x80
    private playerNum: number
    // end flags & 0x80
    // flags & 0x100
    private unk08: number
    // end flags & 0x100
    // flags & 0x200
    private hostUserId: number
    private hostUserName: PacketString
    private unk11: number
    // end flags & 0x200
    // flags & 0x400
    private unk12: number
    // end flags & 0x400
    // flags & 0x800
    private unk13: number
    private unk14: number
    private unk15: number
    private unk16: number
    private unk17: number
    private unk18: number
    private unk19: number
    // end flags & 0x800
    // flags & 0x1000
    private unk20: number // the arrays' count
    // four variable arrays would be here
    // end flags & 0x1000
    // flags & 0x2000
    private unk21: number
    // end flags & 0x2000
    // flags & 0x4000
    private unk22: number
    // end flags & 0x4000
    // flags & 0x8000
    private botsEnabled: number
    // end flags & 0x8000
    // flags & 0x10000
    private unk24: number
    // end flags & 0x10000
    // flags & 0x20000
    private startMoney: number
    // end flags & 0x20000
    // flags & 0x40000
    private unk26: number
    // end flags & 0x40000
    // flags & 0x80000
    private unk27: number
    // end flags & 0x80000
    // flags & 0x100000
    private unk28: number
    // end flags & 0x100000
    // flags & 0x200000
    private unk29: number
    // end flags & 0x200000
    // flags & 0x400000
    private unk30: Uint64LE
    // end flags & 0x400000
    // flags & 0x800000
    private winLimit: number
    private killLimit: number
    private forceCamera: number
    // end flags & 0x800000
    // flags & 0x1000000
    private unk34: number
    // end flags & 0x1000000
    // flags & 0x2000000
    private unk35: number
    // end flags & 0x2000000
    // flags & 0x4000000
    private nextMapEnabled: number
    // end flags & 0x4000000
    // flags & 0x8000000
    private teamChange: number
    // end flags & 0x8000000
    // flags & 0x10000000
    private unk38: number
    // end flags & 0x10000000
    // flags & 0x20000000
    private unk39: number
    // end flags & 0x20000000
    // flags & 0x40000000
    private unk40: number
    private unk41: number
    // end flags & 0x40000000
    // flags & 0x80000000
    private difficulty: number
    // end flags & 0x80000000

    constructor() {
        this.id = 533
        this.flags = new Uint64LE(-1) // actual value is 0xFFE3FFFFFFFFFFFF

        this.unk00 = new PacketString('test room')
        this.unk01 = 0
        this.unk02 = 1
        this.unk03 = 0
        this.gameModeId = 2
        this.mapId = 3
        this.unk06 = 1
        this.playerNum = 16
        this.unk08 = 0
        this.hostUserId = 1
        this.hostUserName = new PacketString('someone')
        this.unk11 = 0
        this.unk12 = 0
        this.unk13 = 0xD73DA43D // maybe some ip? it looks like 61.164.61.215
        this.unk14 = 0x9F31 // would this be some port? 40753 in decimal
        this.unk15 = 0xB2B9
        this.unk16 = 0xD73DA43D
        this.unk17 = 0x9F31
        this.unk18 = 0xB2B9
        this.unk19 = 5
        this.unk20 = 0
        this.unk21 = 5
        this.unk22 = 2
        this.botsEnabled = 1
        this.unk24 = 0
        this.startMoney = 16000
        this.unk26 = 0
        this.unk27 = 0
        this.unk28 = 0
        this.unk29 = 1
        this.unk30 = new Uint64LE(0x5AF6F7BF)
        this.winLimit = 5
        this.killLimit = 350
        this.forceCamera = 1
        this.unk34 = 4
        this.unk35 = 0
        this.nextMapEnabled = 0
        this.teamChange = 0
        this.unk38 = 0
        this.unk39 = 0
        this.unk40 = 0
        this.unk41 = 1
        this.difficulty = 0
    }

    public build(outPacket: OutPacketBase): void {
        outPacket.writeUInt16(this.id)
        outPacket.writeUInt64(this.flags)
        outPacket.writeString(this.unk00)
        outPacket.writeUInt8(this.unk01)
        outPacket.writeUInt8(this.unk02)
        outPacket.writeUInt16(this.unk03)
        outPacket.writeUInt8(this.gameModeId)
        outPacket.writeUInt8(this.mapId)
        outPacket.writeUInt8(this.unk06)
        outPacket.writeUInt8(this.playerNum)
        outPacket.writeUInt8(this.unk08)
        outPacket.writeUInt32(this.hostUserId)
        outPacket.writeString(this.hostUserName)
        outPacket.writeUInt8(this.unk11)
        outPacket.writeUInt8(this.unk12)
        outPacket.writeUInt32(this.unk13)
        outPacket.writeUInt16(this.unk14)
        outPacket.writeUInt16(this.unk15)
        outPacket.writeUInt32(this.unk16)
        outPacket.writeUInt16(this.unk17)
        outPacket.writeUInt16(this.unk18)
        outPacket.writeUInt8(this.unk19)
        outPacket.writeUInt8(this.unk20)
        outPacket.writeUInt8(this.unk21)
        outPacket.writeUInt8(this.unk22)
        outPacket.writeUInt8(this.botsEnabled)
        outPacket.writeUInt8(this.unk24)
        outPacket.writeUInt16(this.startMoney)
        outPacket.writeUInt8(this.unk26)
        outPacket.writeUInt8(this.unk27)
        outPacket.writeUInt8(this.unk28)
        outPacket.writeUInt8(this.unk29)
        outPacket.writeUInt64(this.unk30)
        outPacket.writeUInt8(this.winLimit)
        outPacket.writeUInt16(this.killLimit)
        outPacket.writeUInt8(this.forceCamera)
        outPacket.writeUInt8(this.unk34)
        outPacket.writeUInt8(this.unk35)
        outPacket.writeUInt8(this.nextMapEnabled)
        outPacket.writeUInt8(this.teamChange)
        outPacket.writeUInt8(this.unk38)
        outPacket.writeUInt8(this.unk39)
        outPacket.writeUInt8(this.unk40)
        outPacket.writeUInt8(this.unk41)
        outPacket.writeUInt8(this.difficulty)
    }
}
