export class LikesDislikes {
    constructor(
        private userId: string,
        private postId: string,
        private like: number
    ) {}

    public getUserId(): string {
        return this.userId
    }
    public setUserId(newValue: string): void {
        this.userId = newValue
    }

    public getPostId(): string {
        return this.postId
    }
    public setPostId(newValue: string): void {
        this.postId = newValue
    }

    public getLike(): number {
        return this.like
    }
    public setLike(newValue: number): void {
        this.like = newValue
    }

}