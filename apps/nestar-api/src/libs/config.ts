import { ObjectId } from 'bson';
export const aviaLableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank	'];
export const aviaLableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];
export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
