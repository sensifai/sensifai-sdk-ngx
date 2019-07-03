import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SensifaiSdkNgxService = /** @class */ (function () {
    function SensifaiSdkNgxService(httpClient) {
        this.httpClient = httpClient;
        this.MainHost = 'https://api.sensifai.com/api/';
    }
    /**
     * Retrieve Result By Task ID
     * @param TaskID: Your Process Task ID
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    /**
     * Retrieve Result By Task ID
     * @param {?} TaskID
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    SensifaiSdkNgxService.prototype.getResultByTaskID = /**
     * Retrieve Result By Task ID
     * @param {?} TaskID
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    function (TaskID, onSuccess, onError) {
        /** @type {?} */
        var payload = {
            'query': 'query( $taskId: String! ){apiResult( taskId: $taskId){ ...on ImageResult{isDone errors imageResults{nsfwResult{type probability value}logoResult{description}landmarkResult{description}taggingResult{label probability}faceResult{detectedBoxesPercentage probability detectedFace label}}} ... on VideoResult{fps duration isDone framesCount errors videoResults{startSecond endSecond startFrame endFrame thumbnailPath taggingResult{label probability}actionResult{label probability}celebrityResult{name frequency} sportResult{label probability}nsfwResult{probability type value}}}}}',
            'variables': { 'taskId': TaskID }
        };
        this.httpClient.post(this.MainHost, payload).subscribe(function (res) {
            onSuccess(res);
        }, function (err) {
            onError(err);
        });
    };
    /**
     * Start Process By URL
     * @param fileUrls: List Of URL's
     * @param ApplicationToken: Application Token
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    /**
     * Start Process By URL
     * @param {?} fileUrls
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    SensifaiSdkNgxService.prototype.uploadByUrls = /**
     * Start Process By URL
     * @param {?} fileUrls
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    function (fileUrls, ApplicationToken, onSuccess, onError) {
        /** @type {?} */
        var payload = {
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
    };
    /**
     * Start Process By Files
     * @param fileInputValue: List Of Files
     * @param ApplicationToken: Application Token
     * @param onSuccess: Success CallBack Function
     * @param onError: Error CallBack Function
     */
    /**
     * Start Process By Files
     * @param {?} fileInputValue
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    SensifaiSdkNgxService.prototype.uploadByFiles = /**
     * Start Process By Files
     * @param {?} fileInputValue
     * @param {?} ApplicationToken
     * @param {?} onSuccess
     * @param {?} onError
     * @return {?}
     */
    function (fileInputValue, ApplicationToken, onSuccess, onError) {
        /** @type {?} */
        var filesLength = fileInputValue.target.files.length;
        /** @type {?} */
        var formData = new FormData();
        /**
         * Create Base Object Query Variable *
         * @type {?}
         */
        var filesMap = {};
        /** @type {?} */
        var nullFiles = Array(filesLength).fill(null);
        /** @type {?} */
        var payload = {
            'operationName': null,
            'query': 'mutation( $token: String!, $files: [Upload!]! ){uploadByFile(token: $token, files: $files){result error succeed{file taskId} cannotUpload}}',
            'variables': {
                'files': nullFiles,
                'token': ApplicationToken
            }
        };
        /** Map Object Generator Loop **/
        for (var i = 0, len = filesLength; i < len; i++) {
            /** @type {?} */
            var tempObj = {};
            tempObj[i] = ['variables.files.' + i.toString()];
            Object.assign(filesMap, tempObj);
        }
        /** Append Operation and Map to FormData Query **/
        formData.append('operations', JSON.stringify(payload));
        formData.append('map', JSON.stringify(filesMap));
        /** Append Files To FormData  **/
        for (var file = 0, len = filesLength; file < len; file++) {
            formData.append(file.toString(), fileInputValue.target.files[file]);
        }
        this.httpClient.post(this.MainHost, formData).subscribe(function (res) {
            onSuccess(res);
        }, function (err) {
            onError(err);
        });
    };
    SensifaiSdkNgxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SensifaiSdkNgxService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SensifaiSdkNgxService.ngInjectableDef = defineInjectable({ factory: function SensifaiSdkNgxService_Factory() { return new SensifaiSdkNgxService(inject(HttpClient)); }, token: SensifaiSdkNgxService, providedIn: "root" });
    return SensifaiSdkNgxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SensifaiSdkNgxModule = /** @class */ (function () {
    function SensifaiSdkNgxModule() {
    }
    SensifaiSdkNgxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SensifaiSdkNgxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SensifaiSdkNgxService, SensifaiSdkNgxModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc2lmYWktc2RrLW5neC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2Vuc2lmYWktc2RrLW5neC9saWIvc2Vuc2lmYWktc2RrLW5neC5zZXJ2aWNlLnRzIiwibmc6Ly9zZW5zaWZhaS1zZGstbmd4L2xpYi9zZW5zaWZhaS1zZGstbmd4Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW5zaWZhaVNka05neFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgTWFpbkhvc3QgPSAnaHR0cHM6Ly9hcGkuc2Vuc2lmYWkuY29tL2FwaS8nO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBSZXN1bHQgQnkgVGFzayBJRFxuICAgKiBAcGFyYW0gVGFza0lEOiBZb3VyIFByb2Nlc3MgVGFzayBJRFxuICAgKiBAcGFyYW0gb25TdWNjZXNzOiBTdWNjZXNzIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSBvbkVycm9yOiBFcnJvciBDYWxsQmFjayBGdW5jdGlvblxuICAgKi9cbiAgZ2V0UmVzdWx0QnlUYXNrSUQoIFRhc2tJRDogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICdxdWVyeSc6ICdxdWVyeSggJHRhc2tJZDogU3RyaW5nISApe2FwaVJlc3VsdCggdGFza0lkOiAkdGFza0lkKXsgLi4ub24gSW1hZ2VSZXN1bHR7aXNEb25lIGVycm9ycyBpbWFnZVJlc3VsdHN7bnNmd1Jlc3VsdHt0eXBlIHByb2JhYmlsaXR5IHZhbHVlfWxvZ29SZXN1bHR7ZGVzY3JpcHRpb259bGFuZG1hcmtSZXN1bHR7ZGVzY3JpcHRpb259dGFnZ2luZ1Jlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1mYWNlUmVzdWx0e2RldGVjdGVkQm94ZXNQZXJjZW50YWdlIHByb2JhYmlsaXR5IGRldGVjdGVkRmFjZSBsYWJlbH19fSAuLi4gb24gVmlkZW9SZXN1bHR7ZnBzIGR1cmF0aW9uIGlzRG9uZSBmcmFtZXNDb3VudCBlcnJvcnMgdmlkZW9SZXN1bHRze3N0YXJ0U2Vjb25kIGVuZFNlY29uZCBzdGFydEZyYW1lIGVuZEZyYW1lIHRodW1ibmFpbFBhdGggdGFnZ2luZ1Jlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1hY3Rpb25SZXN1bHR7bGFiZWwgcHJvYmFiaWxpdHl9Y2VsZWJyaXR5UmVzdWx0e25hbWUgZnJlcXVlbmN5fSBzcG9ydFJlc3VsdHtsYWJlbCBwcm9iYWJpbGl0eX1uc2Z3UmVzdWx0e3Byb2JhYmlsaXR5IHR5cGUgdmFsdWV9fX19fScsXG4gICAgICAndmFyaWFibGVzJzogeyd0YXNrSWQnOiBUYXNrSUQgfVxuICAgIH07XG4gICAgdGhpcy5odHRwQ2xpZW50LnBvc3QoIHRoaXMuTWFpbkhvc3QsIHBheWxvYWQgKS5zdWJzY3JpYmUoIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIG9uU3VjY2VzcyggcmVzICk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgb25FcnJvciggZXJyICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgUHJvY2VzcyBCeSBVUkxcbiAgICogQHBhcmFtIGZpbGVVcmxzOiBMaXN0IE9mIFVSTCdzXG4gICAqIEBwYXJhbSBBcHBsaWNhdGlvblRva2VuOiBBcHBsaWNhdGlvbiBUb2tlblxuICAgKiBAcGFyYW0gb25TdWNjZXNzOiBTdWNjZXNzIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSBvbkVycm9yOiBFcnJvciBDYWxsQmFjayBGdW5jdGlvblxuICAgKi9cbiAgdXBsb2FkQnlVcmxzKCBmaWxlVXJsczogQXJyYXk8c3RyaW5nPiwgQXBwbGljYXRpb25Ub2tlbjogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICdxdWVyeSc6ICdtdXRhdGlvbiggJHRva2VuOiBTdHJpbmchLCAkdXJsczogW1N0cmluZyFdISApe3VwbG9hZEJ5VXJsKCB0b2tlbjogJHRva2VuLCB1cmxzOiAkdXJscyl7cmVzdWx0IGVycm9yIHN1Y2NlZWR7ZmlsZSB0YXNrSWR9IGNhbm5vdFVwbG9hZH19JyxcbiAgICAgICd2YXJpYWJsZXMnOiB7XG4gICAgICAgICd1cmxzJzogZmlsZVVybHMsXG4gICAgICAgICd0b2tlbic6IEFwcGxpY2F0aW9uVG9rZW5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5odHRwQ2xpZW50LnBvc3QoIHRoaXMuTWFpbkhvc3QsIHBheWxvYWQgKS5zdWJzY3JpYmUoIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIG9uU3VjY2VzcyggcmVzICk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgb25FcnJvciggZXJyICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgUHJvY2VzcyBCeSBGaWxlc1xuICAgKiBAcGFyYW0gZmlsZUlucHV0VmFsdWU6IExpc3QgT2YgRmlsZXNcbiAgICogQHBhcmFtIEFwcGxpY2F0aW9uVG9rZW46IEFwcGxpY2F0aW9uIFRva2VuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3M6IFN1Y2Nlc3MgQ2FsbEJhY2sgRnVuY3Rpb25cbiAgICogQHBhcmFtIG9uRXJyb3I6IEVycm9yIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqL1xuICB1cGxvYWRCeUZpbGVzKCBmaWxlSW5wdXRWYWx1ZSwgQXBwbGljYXRpb25Ub2tlbjogc3RyaW5nLCBvblN1Y2Nlc3MsIG9uRXJyb3IgKSB7XG4gICAgY29uc3QgZmlsZXNMZW5ndGggPSBmaWxlSW5wdXRWYWx1ZS50YXJnZXQuZmlsZXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAvKiogQ3JlYXRlIEJhc2UgT2JqZWN0IFF1ZXJ5IFZhcmlhYmxlICoqL1xuICAgIGNvbnN0IGZpbGVzTWFwID0ge307XG4gICAgY29uc3QgbnVsbEZpbGVzID0gQXJyYXkoIGZpbGVzTGVuZ3RoICkuZmlsbChudWxsKTtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgJ29wZXJhdGlvbk5hbWUnOiBudWxsLFxuICAgICAgJ3F1ZXJ5JyAgICAgICAgOiAnbXV0YXRpb24oICR0b2tlbjogU3RyaW5nISwgJGZpbGVzOiBbVXBsb2FkIV0hICl7dXBsb2FkQnlGaWxlKHRva2VuOiAkdG9rZW4sIGZpbGVzOiAkZmlsZXMpe3Jlc3VsdCBlcnJvciBzdWNjZWVke2ZpbGUgdGFza0lkfSBjYW5ub3RVcGxvYWR9fScsXG4gICAgICAndmFyaWFibGVzJyAgICA6IHtcbiAgICAgICAgJ2ZpbGVzJzogbnVsbEZpbGVzLFxuICAgICAgICAndG9rZW4nOiBBcHBsaWNhdGlvblRva2VuXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBNYXAgT2JqZWN0IEdlbmVyYXRvciBMb29wICoqL1xuICAgIGZvciAoIGxldCBpID0gMCwgbGVuID0gZmlsZXNMZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgdGVtcE9iaiA9IHt9O1xuICAgICAgdGVtcE9ialtpXSAgPSBbJ3ZhcmlhYmxlcy5maWxlcy4nICsgaS50b1N0cmluZygpXTtcbiAgICAgIE9iamVjdC5hc3NpZ24oIGZpbGVzTWFwLCB0ZW1wT2JqKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIE9wZXJhdGlvbiBhbmQgTWFwIHRvIEZvcm1EYXRhIFF1ZXJ5ICoqL1xuICAgIGZvcm1EYXRhLmFwcGVuZCggJ29wZXJhdGlvbnMnLCBKU09OLnN0cmluZ2lmeSggcGF5bG9hZCkgKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoICdtYXAnLCBKU09OLnN0cmluZ2lmeSggZmlsZXNNYXAgKSApO1xuXG4gICAgLyoqIEFwcGVuZCBGaWxlcyBUbyBGb3JtRGF0YSAgKiovXG4gICAgZm9yICggbGV0IGZpbGUgPSAwLCBsZW4gPSBmaWxlc0xlbmd0aDsgZmlsZSA8IGxlbjsgZmlsZSsrKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoIGZpbGUudG9TdHJpbmcoKSAsIGZpbGVJbnB1dFZhbHVlLnRhcmdldC5maWxlc1tmaWxlXSApO1xuICAgIH1cblxuICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KCB0aGlzLk1haW5Ib3N0LCBmb3JtRGF0YSApLnN1YnNjcmliZSggZnVuY3Rpb24gKHJlcykge1xuICAgICAgb25TdWNjZXNzKCByZXMgKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBvbkVycm9yKCBlcnIgKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZW5zaWZhaVNka05neE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVVFLCtCQUFxQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRm5DLGFBQVEsR0FBRywrQkFBK0IsQ0FBQztLQUVIOzs7Ozs7Ozs7Ozs7OztJQVFoRCxpREFBaUI7Ozs7Ozs7SUFBakIsVUFBbUIsTUFBYyxFQUFFLFNBQVMsRUFBRSxPQUFPOztZQUM3QyxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsaWtCQUFpa0I7WUFDMWtCLFdBQVcsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUU7U0FDakM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBRSxDQUFDLFNBQVMsQ0FBRSxVQUFVLEdBQUc7WUFDckUsU0FBUyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQ2xCLEVBQUUsVUFBVSxHQUFHO1lBQ2QsT0FBTyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztLQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0lBU0QsNENBQVk7Ozs7Ozs7O0lBQVosVUFBYyxRQUF1QixFQUFFLGdCQUF3QixFQUFFLFNBQVMsRUFBRSxPQUFPOztZQUMzRSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsMElBQTBJO1lBQ25KLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUUsQ0FBQyxTQUFTLENBQUUsVUFBVSxHQUFHO1lBQ3JFLFNBQVMsQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNsQixFQUFFLFVBQVUsR0FBRztZQUNkLE9BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7Ozs7OztJQVNELDZDQUFhOzs7Ozs7OztJQUFiLFVBQWUsY0FBYyxFQUFFLGdCQUF3QixFQUFFLFNBQVMsRUFBRSxPQUFPOztZQUNuRSxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTs7WUFDaEQsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFOzs7OztZQUd6QixRQUFRLEdBQUcsRUFBRTs7WUFDYixTQUFTLEdBQUcsS0FBSyxDQUFFLFdBQVcsQ0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1lBQzNDLE9BQU8sR0FBRztZQUNkLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE9BQU8sRUFBVSw2SUFBNkk7WUFDOUosV0FBVyxFQUFNO2dCQUNmLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1NBQ0Y7O1FBR0QsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDMUMsT0FBTyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkM7O1FBR0QsUUFBUSxDQUFDLE1BQU0sQ0FBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxPQUFPLENBQUMsQ0FBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFFLENBQUUsQ0FBQzs7UUFHckQsS0FBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3pELFFBQVEsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7U0FDeEU7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUFDLFNBQVMsQ0FBRSxVQUFVLEdBQUc7WUFDdEUsU0FBUyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQ2xCLEVBQUUsVUFBVSxHQUFHO1lBQ2QsT0FBTyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztLQUNKOztnQkE5RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7Z0NBRG5CO0NBR0E7Ozs7OztBQ0hBO0lBRUE7S0FNb0M7O2dCQU5uQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNaOztJQUNrQywyQkFBQztDQU5wQzs7Ozs7Ozs7Ozs7Ozs7In0=