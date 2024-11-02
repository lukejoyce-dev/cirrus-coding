import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from "class-validator";

class ManufacturerDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  model!: string;

  @IsString()
  @IsNotEmpty()
  logoBase64!: string;
}

class SupplierDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  logoBase64!: string;
}

class AddressDto {
  @IsString()
  @IsNotEmpty()
  firstLine!: string;

  @IsString()
  @IsNotEmpty()
  postCode!: string;
}

class CommsHubDto {
  @IsNumber()
  signal!: number;

  @IsString()
  @IsNotEmpty()
  ipv6!: string;

  @IsString()
  @IsNotEmpty()
  imei!: string;

  @IsString()
  @IsNotEmpty()
  deviceTime!: string;

  @IsString()
  @IsNotEmpty()
  icc!: string;

  @IsString()
  @IsNotEmpty()
  msisdn!: string;

  @IsObject()
  manufacturer!: ManufacturerDto;

  @IsObject()
  supplier!: SupplierDto;
}

export class MeterDto {
  @IsString()
  @IsNotEmpty()
  guid!: string;

  @IsString()
  avatar!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsBoolean()
  hasSmartMeter!: boolean;

  @IsObject()
  address!: AddressDto;

  @IsObject()
  commsHub!: CommsHubDto;
}
