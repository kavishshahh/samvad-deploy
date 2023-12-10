// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PostCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type PostCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PostCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): PostCreated | null {
    return changetype<PostCreated | null>(
      store.get_in_block("PostCreated", id.toHexString())
    );
  }

  static load(id: Bytes): PostCreated | null {
    return changetype<PostCreated | null>(
      store.get("PostCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get Samvad_id(): BigInt {
    let value = this.get("Samvad_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set Samvad_id(value: BigInt) {
    this.set("Samvad_id", Value.fromBigInt(value));
  }

  get mediaUrl(): string {
    let value = this.get("mediaUrl");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mediaUrl(value: string) {
    this.set("mediaUrl", Value.fromString(value));
  }

  get url(): string {
    let value = this.get("url");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }

  get text(): string {
    let value = this.get("text");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set text(value: string) {
    this.set("text", Value.fromString(value));
  }

  get heading(): string {
    let value = this.get("heading");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set heading(value: string) {
    this.set("heading", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ReplyCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ReplyCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ReplyCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ReplyCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ReplyCreated | null {
    return changetype<ReplyCreated | null>(
      store.get_in_block("ReplyCreated", id.toHexString())
    );
  }

  static load(id: Bytes): ReplyCreated | null {
    return changetype<ReplyCreated | null>(
      store.get("ReplyCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get Samvad_id(): BigInt {
    let value = this.get("Samvad_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set Samvad_id(value: BigInt) {
    this.set("Samvad_id", Value.fromBigInt(value));
  }

  get text(): string {
    let value = this.get("text");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set text(value: string) {
    this.set("text", Value.fromString(value));
  }

  get post(): BigInt {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set post(value: BigInt) {
    this.set("post", Value.fromBigInt(value));
  }

  get parent(): BigInt {
    let value = this.get("parent");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set parent(value: BigInt) {
    this.set("parent", Value.fromBigInt(value));
  }

  get top_level(): boolean {
    let value = this.get("top_level");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set top_level(value: boolean) {
    this.set("top_level", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class TokensTransferred extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokensTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TokensTransferred must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokensTransferred", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): TokensTransferred | null {
    return changetype<TokensTransferred | null>(
      store.get_in_block("TokensTransferred", id.toHexString())
    );
  }

  static load(id: Bytes): TokensTransferred | null {
    return changetype<TokensTransferred | null>(
      store.get("TokensTransferred", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get messageId(): Bytes {
    let value = this.get("messageId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set messageId(value: Bytes) {
    this.set("messageId", Value.fromBytes(value));
  }

  get destinationChainSelector(): BigInt {
    let value = this.get("destinationChainSelector");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set destinationChainSelector(value: BigInt) {
    this.set("destinationChainSelector", Value.fromBigInt(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get feeToken(): Bytes {
    let value = this.get("feeToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set feeToken(value: Bytes) {
    this.set("feeToken", Value.fromBytes(value));
  }

  get fees(): BigInt {
    let value = this.get("fees");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set fees(value: BigInt) {
    this.set("fees", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
