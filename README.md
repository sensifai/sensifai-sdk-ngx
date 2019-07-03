## Installation

Install the npm package:
```sh
npm i sensifai-sdk-ngx --save
```        

Import module:
```typescript
import { SensifaiSdkNgxModule } from 'sensifai-sdk-ngx';

@NgModule({
  imports: [ SensifaiSdkNgxModule ]
});
```
## Sample Usage
   
The following example will set up the client and predict video or image attributes.
First of all, you need to import the library and define an instance as mentioned above.
You can get a free limited `token` from [Developer Panel](https://developer.sensifai.com) by creating an application.
Then, if you want to process Data by URL you can call `uploadByUrls` like the below sample code.

```typescript
/** This Function Return a Json Result **/
constructor( private sdk : SensifaiSdkNgxService ){}

const urls_list = ['https://url1.png', 'http://url2.jpg'];
this.sdk.uploadByUrls( urls_list, 'YOUR_APPLICATION_TOKEN', function (res) {
  console.log(res);
}, function (err) {
  console.log(err);
});
```

Also, if you want to process Data by File, you can call `uploadByFiles` like the following sample code. 


```html
<input type="file" multiple (change)="fileInputOnChange( $event )">
```

```typescript
/** This Function Return a Json Result **/
constructor( private sdk : SensifaiSdkNgxService ){}

fileInputOnChange( event ){
  this.sdk.uploadByFiles( event, 'YOUR_APPLICATION_TOKEN', function (res) {
    console.log(res);
  }, function (err) {
    console.log(err);
  });
}
```

at the end, to retrieve the result of a task, pass it through `getResultByTaskID`.
Please don't forget to pass a single `TaskID!` this function won't work with a list of task id.


```typescript
/** This Function Return a Json Result **/
constructor( private sdk : SensifaiSdkNgxService ){}

const TaskID = 'XXXX-XXX-XXXX-XXXX';
this.sdk.getResultByTaskID( TaskID, function (res) {
  console.log(res);
}, function (err) {
  console.log(err);
});
```
