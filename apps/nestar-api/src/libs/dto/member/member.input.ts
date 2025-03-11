import { MemberAuthType } from './../../enums/member.enum';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length, IsOptional } from 'class-validator';
import { MemberType } from '../../enums/member.enum';
@InputType()
export class MemberInput {
	@IsNotEmpty()
	@Length(3, 12)
	@Field(() => String)
	memberNick: string;

	@IsNotEmpty()
	@Length(5, 20)
	@Field(() => String)
	memberPassword: string;

	@IsNotEmpty()
	@Field(() => String)
	memberPhone: string;

	@IsOptional()
	@Field(() => MemberType, { nullable: true })
	memberType?: MemberType;
	@IsOptional()
	@Field(() => MemberAuthType, { nullable: true })
	MemberAuthType?: MemberAuthType;
}
@InputType()
export class LoginInput {
	@Field(() => String)
	memberNick: string;

	@Field(() => String)
	memberPassword: string;
}
