import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { LikeModule } from '../like/like.module';
import { ViewModule } from '../view/view.module';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';
import FollowSchema from '../../schemas/Follow.model';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Follow',
				schema: FollowSchema,
			},
		]),
		AuthModule,
		MemberModule,
		ViewModule,
		LikeModule,
	],
	providers: [FollowService, FollowResolver],
	exports: [FollowService, FollowResolver],
})
export class FollowModule {}

