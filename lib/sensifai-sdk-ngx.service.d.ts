import { HttpClient } from '@angular/common/http';
export declare class SensifaiSdkNgxService {
    private httpClient;
    private MainHost;
    constructor(httpClient: HttpClient);
    /**
     * Retrieve Result By Task ID
     * @param TaskID: Your Process Task ID
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    getResultByTaskID(TaskID: string, onSuccess: any, onError: any): void;
    /**
     * Start Process By URL
     * @param fileUrls: List Of URL's
     * @param ApplicationToken: Application Token
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    uploadByUrls(fileUrls: Array<string>, ApplicationToken: string, onSuccess: any, onError: any): void;
    /**
     * Start Process By Files
     * @param fileInputValue: List Of Files
     * @param ApplicationToken: Application Token
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    uploadByFiles(fileInputValue: any, ApplicationToken: string, onSuccess: any, onError: any): void;
}
