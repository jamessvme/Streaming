export type Commit = {
	id: number;
	hash: string;
	isLast: boolean;
	prevId: number;
	nextId: number;
	isFirst: boolean;
	name: string;
	libraryId: number;
	authorId: number;
	createdAt: string;
};
