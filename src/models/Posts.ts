export class Posts {
    constructor(
        private id: string,
        private creator: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updateAt: string
    ){}

    public getId(): string {
        return this.id
    }

    public setId(newValue: string): void {
        this.id = newValue
    }

    public getCreator(): string {
        return this.creator
    }

    public setCreator(newValue: string): void {
        this.creator = newValue
    }

    public getContent(): string {
        return this.content
    }

    public setContent(newValue: string): void {
        this.content = newValue
    }

    public getLikes(): number {
        return this.likes
    }

    public setLikes(newValue: number): void {
        this.likes = newValue
    }

    public getDislikes(): number {
        return this.dislikes
    }

    public setDislikes(newValue: number): void {
        this.dislikes = newValue
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    // public setCreatedAt(newValue: string): void {
    //     this.createdAt = newValue
    // }

    public getUpdatedAt(): string {
        return this.updateAt
    }

    public setUpdatedAt(newValue: string): void {
        this.updateAt = newValue
    }
}