import { IsString } from 'class-validator'

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly color: string;

  @IsString({ each: true})
  readonly hobbies: string[];
}
