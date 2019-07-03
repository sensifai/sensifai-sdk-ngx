import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SensifaiSdkNgxService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.MainHost = 'https://api.sensifai.com/api/';
    }
    /**
     * Retrieve Result By Task ID
     * @param {?} TaskID
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    getResultByTaskID(TaskID, onSuccess, onError) {
        /** @type {?} */
        const payload = {
            'query': 'query( $taskId: String! ){apiResult( taskId: $taskId){ ...on ImageResult{isDone errors imageResults{nsfwResult{type probability value}logoResult{description}landmarkResult{description}taggingResult{label probability}faceResult{detectedBoxesPercentage probability detectedFace label}}} ... on VideoResult{fps duration isDone framesCount errors videoResults{startSecond endSecond startFrame endFrame thumbnailPath taggingResult{label probability}actionResult{label probability}celebrityResult{name frequency} sportResult{label probability}nsfwResult{probability type value}}}}}',
            'variables': { 'taskId': TaskID }
        };
        this.httpClient.post(this.MainHost, payload).subscribe(function (res) {
            onSuccess(res);
        }, function (err) {
            onError(err);
        });
    }
    /**
     * Start Process By URL
     * @param {?} fileUrls
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    uploadByUrls(fileUrls, ApplicationToken, onSuccess, onError) {
        /** @type {?} */
        const payload = {
            'query': 'mutation( $token: String!, $urls: [String!]! ){uploadByUrl( token: $token, urls: $urls){result error succeed{file taskId} cannotUpload}}',
            'variables': {
                'urls': fileUrls,
                'token': ApplicationToken
            }
        };
        this.httpClient.post(this.MainHost, payload).subscribe(function (res) {
            onSuccess(res);
        }, function (err) {
            onError(err);
        });
    }
    /**
     * Start Process By Files
     * @param {?} fileInputValue
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    uploadByFiles(fileInputValue, ApplicationToken, onSuccess, onError) {
        /** @type {?} */
        const filesLength = fileInputValue.target.files.length;
        /** @type {?} */
        const formData = new FormData();
        /**
         * Create Base Object Query Variable *
         * @type {?}
         */
        const filesMap = {};
        /** @type {?} */
        const nullFiles = Array(filesLength).fill(null);
        /** @type {?} */
        const payload = {
            'operationName': null,
            'query': 'mutation( $token: String!, $files: [Upload!]! ){uploadByFile(token: $token, files: $files){result error succeed{file taskId} cannotUpload}}',
            'variables': {
                'files': nullFiles,
                'token': ApplicationToken
            }
        };
        /** Map Object Generator Loop **/
        for (let i = 0, len = filesLength; i < len; i++) {
            /** @type {?} */
            const tempObj = {};
            tempObj[i] = ['variables.files.' + i.toString()];
            Object.assign(filesMap, tempObj);
        }
        /** Append Operation and Map to FormData Query **/
        formData.append('operations', JSON.stringify(payload));
        formData.append('map', JSON.stringify(filesMap));
        /** Append Files To FormData  **/
        for (let file = 0, len = filesLength; file < len; file++) {
            formData.append(file.toString(), fileInputValue.target.files[file]);
        }
        this.httpClient.post(this.MainHost, formData).subscribe(function (res) {
            onSuccess(res);
        }, function (err) {
            onError(err);
        });
    }
}
SensifaiSdkNgxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SensifaiSdkNgxService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SensifaiSdkNgxService.ngInjectableDef = defineInjectable({ factory: function SensifaiSdkNgxService_Factory() { return new SensifaiSdkNgxService(inject(HttpClient)); }, token: SensifaiSdkNgxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SensifaiSdkNgxModule {
}
SensifaiSdkNgxModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SensifaiSdkNgxService, SensifaiSdkNgxModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc2lmYWktc2RrLW5neC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2Vuc2lmYWktc2RrLW5neC9saWIvc2Vuc2lmYWktc2RrLW5neC5zZXJ2aWNlLnRzIiwibmc6Ly9zZW5zaWZhaS1zZGstbmd4L2xpYi9zZW5zaWZhaS1zZGstbmd4Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW5zaWZhaVNka05neFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgTWFpbkhvc3QgPSAnaHR0cHM6Ly9hcGkuc2Vuc2lmYWkuY29tL2FwaS8nO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBSZXN1bHQgQnkgVGFzayBJRFxuICAgKiBAcGFyYW0gVGFza0lEOiBZb3VyIFByb2Nlc3MgVGFzayBJRFxuICAgKiBAcGFyYW0gb25TdWNjZXNzOiBTdWNjZXNzIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSBvbkVycm9yOiBFcnJvciBDYWxsQmFjayBGdW5jdGlvblxuICAgKi9cbiAgZ2V0UmVzdWx0QnlUYXNrSUQoIFRhc2tJRDogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICdxdWVyeSc6ICdxdWVyeSggJHRhc2tJZDogU3RyaW5nISApe2FwaVJlc3VsdCggdGFza0lkOiAkdGFza0lkKXsgLi4ub24gSW1hZ2VSZXN1bHR7aXNEb25lIGVycm9ycyBpbWFnZVJlc3VsdHN7bnNmd1Jlc3VsdHt0eXBlIHByb2JhYmlsaXR5IHZhbHVlfWxvZ29SZXN1bHR7ZGVzY3JpcHRpb259bGFuZG1hcmtSZXN1bHR7ZGVzY3JpcHRpb259dGFnZ2luZ1Jlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1mYWNlUmVzdWx0e2RldGVjdGVkQm94ZXNQZXJjZW50YWdlIHByb2JhYmlsaXR5IGRldGVjdGVkRmFjZSBsYWJlbH19fSAuLi4gb24gVmlkZW9SZXN1bHR7ZnBzIGR1cmF0aW9uIGlzRG9uZSBmcmFtZXNDb3VudCBlcnJvcnMgdmlkZW9SZXN1bHRze3N0YXJ0U2Vjb25kIGVuZFNlY29uZCBzdGFydEZyYW1lIGVuZEZyYW1lIHRodW1ibmFpbFBhdGggdGFnZ2luZ1Jlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1hY3Rpb25SZXN1bHR7bGFiZWwgcHJvYmFiaWxpdHl9Y2VsZWJyaXR5UmVzdWx0e25hbWUgZnJlcXVlbmN5fSBzcG9ydFJlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1uc2Z3UmVzdWx0e3Byb2JhYmlsaXR5IHR5cGUgdmFsdWV9fX19fScsXG4gICAgICAndmFyaWFibGVzJzogeyd0YXNrSWQnOiBUYXNrSUQgfVxuICAgIH07XG4gICAgdGhpcy5odHRwQ2xpZW50LnBvc3QoIHRoaXMuTWFpbkhvc3QsIHBheWxvYWQgKS5zdWJzY3JpYmUoIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIG9uU3VjY2VzcyggcmVzICk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgb25FcnJvciggZXJyICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgUHJvY2VzcyBCeSBVUkxcbiAgICogQHBhcmFtIGZpbGVVcmxzOiBMaXN0IE9mIFVSTCdzXG4gICAqIEBwYXJhbSBBcHBsaWNhdGlvblRva2VuOiBBcHBsaWNhdGlvbiBUb2tlblxuICAgKiBAcGFyYW0gb25TdWNjZXNzOiBTdWNjZXNzIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSBvbkVycm9yOiBFcnJvciBDYWxsQmFjayBGdW5jdGlvblxuICAgKi9cbiAgdXBsb2FkQnlVcmxzKCBmaWxlVXJsczogQXJyYXk8c3RyaW5nPiwgQXBwbGljYXRpb25Ub2tlbjogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICdxdWVyeSc6ICdtdXRhdGlvbiggJHRva2VuOiBTdHJpbmchLCAkdXJsczogW1N0cmluZyFdISApe3VwbG9hZEJ5VXJsKCB0b2tlbjogJHRva2VuLCB1cmxzOiAkdXJscyl7cmVzdWx0IGVycm9yIHN1Y2NlZWR7ZmlsZSB0YXNrSWR9IGNhbm5vdFVwbG9hZH19JyxcbiAgICAgICd2YXJpYWJsZXMnOiB7XG4gICAgICAgICd1cmxzJzogZmlsZVVybHMsXG4gICAgICAgICd0b2tlbic6IEFwcGxpY2F0aW9uVG9rZW5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5odHRwQ2xpZW50LnBvc3QoIHRoaXMuTWFpbkhvc3QsIHBheWxvYWQgKS5zdWJzY3JpYmUoIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIG9uU3VjY2VzcyggcmVzICk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgb25FcnJvciggZXJyICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgUHJvY2VzcyBCeSBGaWxlc1xuICAgKiBAcGFyYW0gZmlsZUlucHV0VmFsdWU6IExpc3QgT2YgRmlsZXNcbiAgICogQHBhcmFtIEFwcGxpY2F0aW9uVG9rZW46IEFwcGxpY2F0aW9uIFRva2VuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3M6IFN1Y2Nlc3MgQ2FsbEJhY2sgRnVuY3Rpb25cbiAgICogQHBhcmFtIG9uRXJyb3I6IEVycm9yIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqL1xuICB1cGxvYWRCeUZpbGVzKCBmaWxlSW5wdXRWYWx1ZSwgQXBwbGljYXRpb25Ub2tlbjogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgZmlsZXNMZW5ndGggPSBmaWxlSW5wdXRWYWx1ZS50YXJnZXQuZmlsZXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAvKiogQ3JlYXRlIEJhc2UgT2JqZWN0IFF1ZXJ5IFZhcmlhYmxlICoqL1xuICAgIGNvbnN0IGZpbGVzTWFwID0ge307XG4gICAgY29uc3QgbnVsbEZpbGVzID0gQXJyYXkoIGZpbGVzTGVuZ3RoICkuZmlsbChudWxsKTtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgJ29wZXJhdGlvbk5hbWUnOiBudWxsLFxuICAgICAgJ3F1ZXJ5JyAgICAgICAgOiAnbXV0YXRpb24oICR0b2tlbjogU3RyaW5nISwgJGZpbGVzOiBbVXBsb2FkIV0hICl7dXBsb2FkQnlGaWxlKHRva2VuOiAkdG9rZW4sIGZpbGVzOiAkZmlsZXMpe3Jlc3VsdCBlcnJvciBzdWNjZWVke2ZpbGUgdGFza0lkfSBjYW5ub3RVcGxvYWR9fScsXG4gICAgICAndmFyaWFibGVzJyAgICA6IHtcbiAgICAgICAgJ2ZpbGVzJzogbnVsbEZpbGVzLFxuICAgICAgICAndG9rZW4nOiBBcHBsaWNhdGlvblRva2VuXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBNYXAgT2JqZWN0IEdlbmVyYXRvciBMb29wICoqL1xuICAgIGZvciAoIGxldCBpID0gMCwgbGVuID0gZmlsZXNMZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgdGVtcE9iaiA9IHt9O1xuICAgICAgdGVtcE9ialtpXSAgPSBbJ3ZhcmlhYmxlcy5maWxlcy4nICsgaS50b1N0cmluZygpXTtcbiAgICAgIE9iamVjdC5hc3NpZ24oIGZpbGVzTWFwLCB0ZW1wT2JqKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIE9wZXJhdGlvbiBhbmQgTWFwIHRvIEZvcm1EYXRhIFF1ZXJ5ICoqL1xuICAgIGZvcm1EYXRhLmFwcGVuZCggJ29wZXJhdGlvbnMnLCBKU09OLnN0cmluZ2lmeSggcGF5bG9hZCkgKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoICdtYXAnLCBKU09OLnN0cmluZ2lmeSggZmlsZXNNYXAgKSApO1xuXG4gICAgLyoqIEFwcGVuZCBGaWxlcyBUbyBGb3JtRGF0YSAgKiovXG4gICAgZm9yICggbGV0IGZpbGUgPSAwLCBsZW4gPSBmaWxlc0xlbmd0aDsgZmlsZSA8IGxlbjsgZmlsZSsrKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoIGZpbGUudG9TdHJpbmcoKSAsIGZpbGVJbnB1dFZhbHVlLnRhcmdldC5maWxlc1tmaWxlXSApO1xuICAgIH1cblxuICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KCB0aGlzLk1haW5Ib3N0LCBmb3JtRGF0YSApLnN1YnNjcmliZSggZnVuY3Rpb24gKHJlcykge1xuICAgICAgb25TdWNjZXNzKCByZXMgKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBvbkVycm9yKCBlcnIgKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZW5zaWZhaVNka05neE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQU1hLHFCQUFxQjs7OztJQUloQyxZQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRm5DLGFBQVEsR0FBRywrQkFBK0IsQ0FBQztLQUVIOzs7Ozs7OztJQVFoRCxpQkFBaUIsQ0FBRSxNQUFjLEVBQUUsU0FBUyxFQUFFLE9BQU87O2NBQzdDLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxpa0JBQWlrQjtZQUMxa0IsV0FBVyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRTtTQUNqQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFFLENBQUMsU0FBUyxDQUFFLFVBQVUsR0FBRztZQUNyRSxTQUFTLENBQUUsR0FBRyxDQUFFLENBQUM7U0FDbEIsRUFBRSxVQUFVLEdBQUc7WUFDZCxPQUFPLENBQUUsR0FBRyxDQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQVNELFlBQVksQ0FBRSxRQUF1QixFQUFFLGdCQUF3QixFQUFFLFNBQVMsRUFBRSxPQUFPOztjQUMzRSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsMElBQTBJO1lBQ25KLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUUsQ0FBQyxTQUFTLENBQUUsVUFBVSxHQUFHO1lBQ3JFLFNBQVMsQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNsQixFQUFFLFVBQVUsR0FBRztZQUNkLE9BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7O0lBU0QsYUFBYSxDQUFFLGNBQWMsRUFBRSxnQkFBd0IsRUFBRSxTQUFTLEVBQUUsT0FBTzs7Y0FDbkUsV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07O2NBQ2hELFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTs7Ozs7Y0FHekIsUUFBUSxHQUFHLEVBQUU7O2NBQ2IsU0FBUyxHQUFHLEtBQUssQ0FBRSxXQUFXLENBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztjQUMzQyxPQUFPLEdBQUc7WUFDZCxlQUFlLEVBQUUsSUFBSTtZQUNyQixPQUFPLEVBQVUsNklBQTZJO1lBQzlKLFdBQVcsRUFBTTtnQkFDZixPQUFPLEVBQUUsU0FBUztnQkFDbEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGOztRQUdELEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzFDLE9BQU8sR0FBRyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25DOztRQUdELFFBQVEsQ0FBQyxNQUFNLENBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFDLENBQUUsQ0FBQztRQUMxRCxRQUFRLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLFFBQVEsQ0FBRSxDQUFFLENBQUM7O1FBR3JELEtBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN6RCxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUUsQ0FBQyxTQUFTLENBQUUsVUFBVSxHQUFHO1lBQ3RFLFNBQVMsQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNsQixFQUFFLFVBQVUsR0FBRztZQUNkLE9BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDSjs7O1lBOUZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7Ozs7O0FDRG5CLE1BUWEsb0JBQW9COzs7WUFOaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUNSO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaOzs7Ozs7Ozs7Ozs7Ozs7In0=