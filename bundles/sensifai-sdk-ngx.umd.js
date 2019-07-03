(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sensifai-sdk-ngx', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['sensifai-sdk-ngx'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SensifaiSdkNgxService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SensifaiSdkNgxService.ngInjectableDef = i0.defineInjectable({ factory: function SensifaiSdkNgxService_Factory() { return new SensifaiSdkNgxService(i0.inject(i1.HttpClient)); }, token: SensifaiSdkNgxService, providedIn: "root" });
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
            { type: i0.NgModule, args: [{
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

    exports.SensifaiSdkNgxService = SensifaiSdkNgxService;
    exports.SensifaiSdkNgxModule = SensifaiSdkNgxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc2lmYWktc2RrLW5neC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NlbnNpZmFpLXNkay1uZ3gvbGliL3NlbnNpZmFpLXNkay1uZ3guc2VydmljZS50cyIsIm5nOi8vc2Vuc2lmYWktc2RrLW5neC9saWIvc2Vuc2lmYWktc2RrLW5neC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2Vuc2lmYWlTZGtOZ3hTZXJ2aWNlIHtcblxuICBwcml2YXRlIE1haW5Ib3N0ID0gJ2h0dHBzOi8vYXBpLnNlbnNpZmFpLmNvbS9hcGkvJztcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50ICkge31cblxuICAvKipcbiAgICogUmV0cmlldmUgUmVzdWx0IEJ5IFRhc2sgSURcbiAgICogQHBhcmFtIFRhc2tJRDogWW91ciBQcm9jZXNzIFRhc2sgSURcbiAgICogQHBhcmFtIG9uU3VjY2VzczogU3VjY2VzcyBDYWxsQmFjayBGdW5jdGlvblxuICAgKiBAcGFyYW0gb25FcnJvcjogRXJyb3IgQ2FsbEJhY2sgRnVuY3Rpb25cbiAgICovXG4gIGdldFJlc3VsdEJ5VGFza0lEKCBUYXNrSUQ6IHN0cmluZywgb25TdWNjZXNzLCBvbkVycm9yICkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAncXVlcnknOiAncXVlcnkoICR0YXNrSWQ6IFN0cmluZyEgKXthcGlSZXN1bHQoIHRhc2tJZDogJHRhc2tJZCl7IC4uLm9uIEltYWdlUmVzdWx0e2lzRG9uZSBlcnJvcnMgaW1hZ2VSZXN1bHRze25zZndSZXN1bHR7dHlwZSBwcm9iYWJpbGl0eSB2YWx1ZX1sb2dvUmVzdWx0e2Rlc2NyaXB0aW9ufWxhbmRtYXJrUmVzdWx0e2Rlc2NyaXB0aW9ufXRhZ2dpbmdSZXN1bHR7bGFiZWwgcHJvYmFiaWxpdHl9ZmFjZVJlc3VsdHtkZXRlY3RlZEJveGVzUGVyY2VudGFnZSBwcm9iYWJpbGl0eSBkZXRlY3RlZEZhY2UgbGFiZWx9fX0gLi4uIG9uIFZpZGVvUmVzdWx0e2ZwcyBkdXJhdGlvbiBpc0RvbmUgZnJhbWVzQ291bnQgZXJyb3JzIHZpZGVvUmVzdWx0c3tzdGFydFNlY29uZCBlbmRTZWNvbmQgc3RhcnRGcmFtZSBlbmRGcmFtZSB0aHVtYm5haWxQYXRoIHRhZ2dpbmdSZXN1bHR7bGFiZWwgcHJvYmFiaWxpdHl9YWN0aW9uUmVzdWx0e2xhYmVsIHByb2JhYmlsaXR5fWNlbGVicml0eVJlc3VsdHtuYW1lIGZyZXF1ZW5jeX0gc3BvcnRSZXN1bHR7bGFiZWwgcHJvYmFiaWxpdHl9bnNmd1Jlc3VsdHtwcm9iYWJpbGl0eSB0eXBlIHZhbHVlfX19fX0nLFxuICAgICAgJ3ZhcmlhYmxlcyc6IHsndGFza0lkJzogVGFza0lEIH1cbiAgICB9O1xuICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KCB0aGlzLk1haW5Ib3N0LCBwYXlsb2FkICkuc3Vic2NyaWJlKCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBvblN1Y2Nlc3MoIHJlcyApO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIG9uRXJyb3IoIGVyciApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IFByb2Nlc3MgQnkgVVJMXG4gICAqIEBwYXJhbSBmaWxlVXJsczogTGlzdCBPZiBVUkwnc1xuICAgKiBAcGFyYW0gQXBwbGljYXRpb25Ub2tlbjogQXBwbGljYXRpb24gVG9rZW5cbiAgICogQHBhcmFtIG9uU3VjY2VzczogU3VjY2VzcyBDYWxsQmFjayBGdW5jdGlvblxuICAgKiBAcGFyYW0gb25FcnJvcjogRXJyb3IgQ2FsbEJhY2sgRnVuY3Rpb25cbiAgICovXG4gIHVwbG9hZEJ5VXJscyggZmlsZVVybHM6IEFycmF5PHN0cmluZz4sIEFwcGxpY2F0aW9uVG9rZW46IHN0cmluZywgb25TdWNjZXNzLCBvbkVycm9yICkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAncXVlcnknOiAnbXV0YXRpb24oICR0b2tlbjogU3RyaW5nISwgJHVybHM6IFtTdHJpbmchXSEgKXt1cGxvYWRCeVVybCggdG9rZW46ICR0b2tlbiwgdXJsczogJHVybHMpe3Jlc3VsdCBlcnJvciBzdWNjZWVke2ZpbGUgdGFza0lkfSBjYW5ub3RVcGxvYWR9fScsXG4gICAgICAndmFyaWFibGVzJzoge1xuICAgICAgICAndXJscyc6IGZpbGVVcmxzLFxuICAgICAgICAndG9rZW4nOiBBcHBsaWNhdGlvblRva2VuXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KCB0aGlzLk1haW5Ib3N0LCBwYXlsb2FkICkuc3Vic2NyaWJlKCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBvblN1Y2Nlc3MoIHJlcyApO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIG9uRXJyb3IoIGVyciApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IFByb2Nlc3MgQnkgRmlsZXNcbiAgICogQHBhcmFtIGZpbGVJbnB1dFZhbHVlOiBMaXN0IE9mIEZpbGVzXG4gICAqIEBwYXJhbSBBcHBsaWNhdGlvblRva2VuOiBBcHBsaWNhdGlvbiBUb2tlblxuICAgKiBAcGFyYW0gb25TdWNjZXNzOiBTdWNjZXNzIENhbGxCYWNrIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSBvbkVycm9yOiBFcnJvciBDYWxsQmFjayBGdW5jdGlvblxuICAgKi9cbiAgdXBsb2FkQnlGaWxlcyggZmlsZUlucHV0VmFsdWUsIEFwcGxpY2F0aW9uVG9rZW46IHN0cmluZywgb25TdWNjZXNzLCBvbkVycm9yICkge1xuICAgIGNvbnN0IGZpbGVzTGVuZ3RoID0gZmlsZUlucHV0VmFsdWUudGFyZ2V0LmZpbGVzLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLyoqIENyZWF0ZSBCYXNlIE9iamVjdCBRdWVyeSBWYXJpYWJsZSAqKi9cbiAgICBjb25zdCBmaWxlc01hcCA9IHt9O1xuICAgIGNvbnN0IG51bGxGaWxlcyA9IEFycmF5KCBmaWxlc0xlbmd0aCApLmZpbGwobnVsbCk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICdvcGVyYXRpb25OYW1lJzogbnVsbCxcbiAgICAgICdxdWVyeScgICAgICAgIDogJ211dGF0aW9uKCAkdG9rZW46IFN0cmluZyEsICRmaWxlczogW1VwbG9hZCFdISApe3VwbG9hZEJ5RmlsZSh0b2tlbjogJHRva2VuLCBmaWxlczogJGZpbGVzKXtyZXN1bHQgZXJyb3Igc3VjY2VlZHtmaWxlIHRhc2tJZH0gY2Fubm90VXBsb2FkfX0nLFxuICAgICAgJ3ZhcmlhYmxlcycgICAgOiB7XG4gICAgICAgICdmaWxlcyc6IG51bGxGaWxlcyxcbiAgICAgICAgJ3Rva2VuJzogQXBwbGljYXRpb25Ub2tlblxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogTWFwIE9iamVjdCBHZW5lcmF0b3IgTG9vcCAqKi9cbiAgICBmb3IgKCBsZXQgaSA9IDAsIGxlbiA9IGZpbGVzTGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHRlbXBPYmogPSB7fTtcbiAgICAgIHRlbXBPYmpbaV0gID0gWyd2YXJpYWJsZXMuZmlsZXMuJyArIGkudG9TdHJpbmcoKV07XG4gICAgICBPYmplY3QuYXNzaWduKCBmaWxlc01hcCwgdGVtcE9iaik7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBPcGVyYXRpb24gYW5kIE1hcCB0byBGb3JtRGF0YSBRdWVyeSAqKi9cbiAgICBmb3JtRGF0YS5hcHBlbmQoICdvcGVyYXRpb25zJywgSlNPTi5zdHJpbmdpZnkoIHBheWxvYWQpICk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCAnbWFwJywgSlNPTi5zdHJpbmdpZnkoIGZpbGVzTWFwICkgKTtcblxuICAgIC8qKiBBcHBlbmQgRmlsZXMgVG8gRm9ybURhdGEgICoqL1xuICAgIGZvciAoIGxldCBmaWxlID0gMCwgbGVuID0gZmlsZXNMZW5ndGg7IGZpbGUgPCBsZW47IGZpbGUrKykge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCBmaWxlLnRvU3RyaW5nKCkgLCBmaWxlSW5wdXRWYWx1ZS50YXJnZXQuZmlsZXNbZmlsZV0gKTtcbiAgICB9XG5cbiAgICB0aGlzLmh0dHBDbGllbnQucG9zdCggdGhpcy5NYWluSG9zdCwgZm9ybURhdGEgKS5zdWJzY3JpYmUoIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIG9uU3VjY2VzcyggcmVzICk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgb25FcnJvciggZXJyICk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2Vuc2lmYWlTZGtOZ3hNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFVRSwrQkFBcUIsVUFBc0I7WUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUZuQyxhQUFRLEdBQUcsK0JBQStCLENBQUM7U0FFSDs7Ozs7Ozs7Ozs7Ozs7UUFRaEQsaURBQWlCOzs7Ozs7O1lBQWpCLFVBQW1CLE1BQWMsRUFBRSxTQUFTLEVBQUUsT0FBTzs7b0JBQzdDLE9BQU8sR0FBRztvQkFDZCxPQUFPLEVBQUUsaWtCQUFpa0I7b0JBQzFrQixXQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO2lCQUNqQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMs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