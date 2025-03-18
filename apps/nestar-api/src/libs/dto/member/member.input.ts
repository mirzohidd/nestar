import { Members } from './member';
import { MemberAuthType, MemberStatus } from './../../enums/member.enum';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Length, IsOptional, IsIn, Min } from 'class-validator';
import { MemberType } from '../../enums/member.enum';
import { aviaLableAgentSorts, aviaLableMemberSorts } from '../../config';
import { Direction } from '../../enums/common.enum';
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
@InputType()
class AISearch {
	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class AgentsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(aviaLableAgentSorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => AISearch)
	search: AISearch;
}

@InputType()
class MISearch {
	@IsOptional()
	@Field(() => MemberStatus, { nullable: true })
	memberStatus?: MemberStatus;

	@IsOptional()
	@Field(() => MemberType, { nullable: true })
	memberType?: MemberType;

	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class MembersInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(aviaLableMemberSorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => MISearch)
	search: MISearch;
}
