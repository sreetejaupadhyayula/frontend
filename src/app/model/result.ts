export interface Result {
    success: boolean;
    data: Data[];
}

export interface Data {
    url: string;
    statusCode: number;
    duration: string;
    date: string;
}