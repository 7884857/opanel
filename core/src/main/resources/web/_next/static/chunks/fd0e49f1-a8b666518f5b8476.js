"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1210],{91503:(e,t,i)=>{let r;i.d(t,{A:()=>n0});let a={ROTATE:0,DOLLY:1,PAN:2},n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s="srgb",o="srgb-linear",l="linear",h="srgb",c="300 es";function u(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}let d={};function p(...e){console.log("THREE."+e.shift(),...e)}function f(e){let t=e[0];if("string"==typeof t&&t.startsWith("TSL:")){let t=e[1];t&&t.isStackTrace?e[0]+=" "+t.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function m(...e){let t="THREE."+(e=f(e)).shift();{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function g(...e){let t="THREE."+(e=f(e)).shift();{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function _(...e){let t=e.join(" ");t in d||(d[t]=!0,m(...e))}let v={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class x{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return void 0!==i&&void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){let i=this._listeners;if(void 0===i)return;let r=i[e];if(void 0!==r){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(void 0===t)return;let i=t[e.type];if(void 0!==i){e.target=this;let t=i.slice(0);for(let i=0,r=t.length;i<r;i++)t[i].call(this,e);e.target=null}}}let M=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],S=Math.PI/180,E=180/Math.PI;function T(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,i=0xffffffff*Math.random()|0,r=0xffffffff*Math.random()|0;return(M[255&e]+M[e>>8&255]+M[e>>16&255]+M[e>>24&255]+"-"+M[255&t]+M[t>>8&255]+"-"+M[t>>16&15|64]+M[t>>24&255]+"-"+M[63&i|128]+M[i>>8&255]+"-"+M[i>>16&255]+M[i>>24&255]+M[255&r]+M[r>>8&255]+M[r>>16&255]+M[r>>24&255]).toLowerCase()}function y(e,t,i){return Math.max(t,Math.min(i,e))}function b(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/0xffffffff;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/0x7fffffff,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function A(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(0xffffffff*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(0x7fffffff*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}let w={DEG2RAD:S,degToRad:function(e){return e*S}};class R{constructor(e=0,t=0){R.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=y(this.x,e.x,t.x),this.y=y(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=y(this.x,e,t),this.y=y(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(y(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(y(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,n=this.y-e.y;return this.x=a*i-n*r+e.x,this.y=a*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class C{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],f=a[n+3];if(c!==f||o!==u||l!==d||h!==p){let e=o*u+l*d+h*p+c*f;e<0&&(u=-u,d=-d,p=-p,f=-f,e=-e);let t=1-s;if(e<.9995){let i=Math.acos(e),r=Math.sin(i);o=o*(t=Math.sin(t*i)/r)+u*(s=Math.sin(s*i)/r),l=l*t+d*s,h=h*t+p*s,c=c*t+f*s}else{o=o*t+u*s,l=l*t+d*s;let e=1/Math.sqrt(o*o+l*l+(h=h*t+p*s)*h+(c=c*t+f*s)*c);o*=e,l*=e,h*=e,c*=e}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-s*d,e[t+2]=l*p+h*d+s*u-o*c,e[t+3]=h*p-s*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:m("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+s+c;if(u>0){let e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(h-o)*e,this._y=(a-l)*e,this._z=(n-r)*e}else if(i>s&&i>c){let e=2*Math.sqrt(1+i-s-c);this._w=(h-o)/e,this._x=.25*e,this._y=(r+n)/e,this._z=(a+l)/e}else if(s>c){let e=2*Math.sqrt(1+s-i-c);this._w=(a-l)/e,this._x=(r+n)/e,this._y=.25*e,this._z=(o+h)/e}else{let e=2*Math.sqrt(1+c-i-s);this._w=(n-r)/e,this._x=(a+l)/e,this._y=(o+h)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(y(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(0===i)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let e=Math.acos(s),l=Math.sin(e);o=Math.sin(o*e)/l,t=Math.sin(t*e)/l,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(L.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(L.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,n=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*n,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*n,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*n,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,n=e.y,s=e.z,o=e.w,l=2*(n*r-s*i),h=2*(s*t-a*r),c=2*(a*i-n*t);return this.x=t+o*l+n*c-s*h,this.y=i+o*h+s*l-a*c,this.z=r+o*c+a*h-n*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=y(this.x,e.x,t.x),this.y=y(this.y,e.y,t.y),this.z=y(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=y(this.x,e,t),this.y=y(this.y,e,t),this.z=y(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(y(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,n=t.x,s=t.y,o=t.z;return this.x=r*o-a*s,this.y=a*n-i*o,this.z=i*s-r*n,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return D.copy(this).projectOnVector(e),this.sub(D)}reflect(e){return this.sub(D.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(y(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let D=new P,L=new C;class U{constructor(e,t,i,r,a,n,s,o,l){U.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==e&&this.set(e,t,i,r,a,n,s,o,l)}set(e,t,i,r,a,n,s,o,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=o,h[6]=i,h[7]=n,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,n=i[0],s=i[3],o=i[6],l=i[1],h=i[4],c=i[7],u=i[2],d=i[5],p=i[8],f=r[0],m=r[3],g=r[6],_=r[1],v=r[4],x=r[7],M=r[2],S=r[5],E=r[8];return a[0]=n*f+s*_+o*M,a[3]=n*m+s*v+o*S,a[6]=n*g+s*x+o*E,a[1]=l*f+h*_+c*M,a[4]=l*m+h*v+c*S,a[7]=l*g+h*x+c*E,a[2]=u*f+d*_+p*M,a[5]=u*m+d*v+p*S,a[8]=u*g+d*x+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8];return t*n*h-t*s*l-i*a*h+i*s*o+r*a*l-r*n*o}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=h*n-s*l,u=s*o-h*a,d=l*a-n*o,p=t*c+i*u+r*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return e[0]=c*f,e[1]=(r*l-h*i)*f,e[2]=(s*i-r*n)*f,e[3]=u*f,e[4]=(h*t-r*o)*f,e[5]=(r*a-s*t)*f,e[6]=d*f,e[7]=(i*o-l*t)*f,e[8]=(n*t-i*a)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,n,s){let o=Math.cos(a),l=Math.sin(a);return this.set(i*o,i*l,-i*(o*n+l*s)+n+e,-r*l,r*o,-r*(-l*n+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(I.makeScale(e,t)),this}rotate(e){return this.premultiply(I.makeRotation(-e)),this}translate(e,t){return this.premultiply(I.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}let I=new U,N=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),F=function(){let e={enabled:!0,workingColorSpace:o,spaces:{},convert:function(e,t,i){return!1!==this.enabled&&t!==i&&t&&i&&(this.spaces[t].transfer===h&&(e.r=B(e.r),e.g=B(e.g),e.b=B(e.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===h&&(e.r=H(e.r),e.g=H(e.g),e.b=H(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return""===e?l:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,i){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,i){return _("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(t,i)},toWorkingColorSpace:function(t,i){return _("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(t,i)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[o]:{primaries:t,whitePoint:r,transfer:l,toXYZ:N,fromXYZ:O,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:s},outputColorSpaceConfig:{drawingBufferColorSpace:s}},[s]:{primaries:t,whitePoint:r,transfer:h,toXYZ:N,fromXYZ:O,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:s}}}),e}();function B(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function H(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}class z{static getDataURL(e,t="image/png"){let i;if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;if(e instanceof HTMLCanvasElement)i=e;else{void 0===r&&(r=u("canvas")),r.width=e.width,r.height=e.height;let t=r.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),i=r}return i.toDataURL(t)}static sRGBToLinear(e){if("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap){let t=u("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let e=0;e<a.length;e++)a[e]=255*B(a[e]/255);return i.putImageData(r,0,0),t}if(!e.data)return m("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*B(t[e]/255)):t[e]=B(t[e]);return{data:t,width:e.width,height:e.height}}}}let G=0;class V{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G++}),this.uuid=T(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return"u">typeof HTMLVideoElement&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):"u">typeof VideoFrame&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):null!==t?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(null!==r){let e;if(Array.isArray(r)){e=[];for(let t=0,i=r.length;t<i;t++)r[t].isDataTexture?e.push(k(r[t].image)):e.push(k(r[t]))}else e=k(r);i.url=e}return t||(e.images[this.uuid]=i),i}}function k(e){return"u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap?z.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(m("Texture: Unable to serialize Texture."),{})}let W=0,X=new P;class j extends x{constructor(e=j.DEFAULT_IMAGE,t=j.DEFAULT_MAPPING,i=1001,r=1001,a=1006,n=1008,s=1023,o=1009,l=j.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W++}),this.uuid=T(),this.name="",this.source=new V(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=o,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(X).x}get height(){return this.source.getSize(X).y}get depth(){return this.source.getSize(X).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(void 0===i){m(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(void 0===r){m(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){!0===e&&this.pmremVersion++}}j.DEFAULT_IMAGE=null,j.DEFAULT_MAPPING=300,j.DEFAULT_ANISOTROPY=1;class Y{constructor(e=0,t=0,i=0,r=1){Y.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*a,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*a,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*a,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,n=e.elements,s=n[0],o=n[4],l=n[8],h=n[1],c=n[5],u=n[9],d=n[2],p=n[6],f=n[10];if(.01>Math.abs(o-h)&&.01>Math.abs(l-d)&&.01>Math.abs(u-p)){if(.1>Math.abs(o+h)&&.1>Math.abs(l+d)&&.1>Math.abs(u+p)&&.1>Math.abs(s+c+f-3))return this.set(1,0,0,0),this;t=Math.PI;let e=(s+1)/2,n=(c+1)/2,m=(f+1)/2,g=(o+h)/4,_=(l+d)/4,v=(u+p)/4;return e>n&&e>m?e<.01?(i=0,r=.707106781,a=.707106781):(r=g/(i=Math.sqrt(e)),a=_/i):n>m?n<.01?(i=.707106781,r=0,a=.707106781):(i=g/(r=Math.sqrt(n)),a=v/r):m<.01?(i=.707106781,r=.707106781,a=0):(i=_/(a=Math.sqrt(m)),r=v/a),this.set(i,r,a,t),this}let m=Math.sqrt((p-u)*(p-u)+(l-d)*(l-d)+(h-o)*(h-o));return .001>Math.abs(m)&&(m=1),this.x=(p-u)/m,this.y=(l-d)/m,this.z=(h-o)/m,this.w=Math.acos((s+c+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=y(this.x,e.x,t.x),this.y=y(this.y,e.y,t.y),this.z=y(this.z,e.z,t.z),this.w=y(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=y(this.x,e,t),this.y=y(this.y,e,t),this.z=y(this.z,e,t),this.w=y(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(y(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q extends x{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Y(0,0,e,t),this.scissorTest=!1,this.viewport=new Y(0,0,e,t),this.textures=[];let r=new j({width:e,height:t,depth:i.depth}),a=i.count;for(let e=0;e<a;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};void 0!==e.mapping&&(t.mapping=e.mapping),void 0!==e.wrapS&&(t.wrapS=e.wrapS),void 0!==e.wrapT&&(t.wrapT=e.wrapT),void 0!==e.wrapR&&(t.wrapR=e.wrapR),void 0!==e.magFilter&&(t.magFilter=e.magFilter),void 0!==e.minFilter&&(t.minFilter=e.minFilter),void 0!==e.format&&(t.format=e.format),void 0!==e.type&&(t.type=e.type),void 0!==e.anisotropy&&(t.anisotropy=e.anisotropy),void 0!==e.colorSpace&&(t.colorSpace=e.colorSpace),void 0!==e.flipY&&(t.flipY=e.flipY),void 0!==e.generateMipmaps&&(t.generateMipmaps=e.generateMipmaps),void 0!==e.internalFormat&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){null!==this._depthTexture&&(this._depthTexture.renderTarget=null),null!==e&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,!0!==this.textures[r].isData3DTexture&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new V(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class K extends q{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Z extends j{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q extends j{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J{constructor(e,t,i,r,a,n,s,o,l,h,c,u,d,p,f,m){J.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==e&&this.set(e,t,i,r,a,n,s,o,l,h,c,u,d,p,f,m)}set(e,t,i,r,a,n,s,o,l,h,c,u,d,p,f,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=a,g[5]=n,g[9]=s,g[13]=o,g[2]=l,g[6]=h,g[10]=c,g[14]=u,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new J().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return 0===this.determinant()?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1)):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2)),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(0===e.determinant())return this.identity();let t=this.elements,i=e.elements,r=1/$.setFromMatrixColumn(e,0).length(),a=1/$.setFromMatrixColumn(e,1).length(),n=1/$.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,n=Math.cos(i),s=Math.sin(i),o=Math.cos(r),l=Math.sin(r),h=Math.cos(a),c=Math.sin(a);if("XYZ"===e.order){let e=n*h,i=n*c,r=s*h,a=s*c;t[0]=o*h,t[4]=-o*c,t[8]=l,t[1]=i+r*l,t[5]=e-a*l,t[9]=-s*o,t[2]=a-e*l,t[6]=r+i*l,t[10]=n*o}else if("YXZ"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e+a*s,t[4]=r*s-i,t[8]=n*l,t[1]=n*c,t[5]=n*h,t[9]=-s,t[2]=i*s-r,t[6]=a+e*s,t[10]=n*o}else if("ZXY"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e-a*s,t[4]=-n*c,t[8]=r+i*s,t[1]=i+r*s,t[5]=n*h,t[9]=a-e*s,t[2]=-n*l,t[6]=s,t[10]=n*o}else if("ZYX"===e.order){let e=n*h,i=n*c,r=s*h,a=s*c;t[0]=o*h,t[4]=r*l-i,t[8]=e*l+a,t[1]=o*c,t[5]=a*l+e,t[9]=i*l-r,t[2]=-l,t[6]=s*o,t[10]=n*o}else if("YZX"===e.order){let e=n*o,i=n*l,r=s*o,a=s*l;t[0]=o*h,t[4]=a-e*c,t[8]=r*c+i,t[1]=c,t[5]=n*h,t[9]=-s*h,t[2]=-l*h,t[6]=i*c+r,t[10]=e-a*c}else if("XZY"===e.order){let e=n*o,i=n*l,r=s*o,a=s*l;t[0]=o*h,t[4]=-c,t[8]=l*h,t[1]=e*c+a,t[5]=n*h,t[9]=i*c-r,t[2]=r*c-i,t[6]=s*h,t[10]=a*c+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(et,e,ei)}lookAt(e,t,i){let r=this.elements;return en.subVectors(e,t),0===en.lengthSq()&&(en.z=1),en.normalize(),er.crossVectors(i,en),0===er.lengthSq()&&(1===Math.abs(i.z)?en.x+=1e-4:en.z+=1e-4,en.normalize(),er.crossVectors(i,en)),er.normalize(),ea.crossVectors(en,er),r[0]=er.x,r[4]=ea.x,r[8]=en.x,r[1]=er.y,r[5]=ea.y,r[9]=en.y,r[2]=er.z,r[6]=ea.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,n=i[0],s=i[4],o=i[8],l=i[12],h=i[1],c=i[5],u=i[9],d=i[13],p=i[2],f=i[6],m=i[10],g=i[14],_=i[3],v=i[7],x=i[11],M=i[15],S=r[0],E=r[4],T=r[8],y=r[12],b=r[1],A=r[5],w=r[9],R=r[13],C=r[2],P=r[6],D=r[10],L=r[14],U=r[3],I=r[7],N=r[11],O=r[15];return a[0]=n*S+s*b+o*C+l*U,a[4]=n*E+s*A+o*P+l*I,a[8]=n*T+s*w+o*D+l*N,a[12]=n*y+s*R+o*L+l*O,a[1]=h*S+c*b+u*C+d*U,a[5]=h*E+c*A+u*P+d*I,a[9]=h*T+c*w+u*D+d*N,a[13]=h*y+c*R+u*L+d*O,a[2]=p*S+f*b+m*C+g*U,a[6]=p*E+f*A+m*P+g*I,a[10]=p*T+f*w+m*D+g*N,a[14]=p*y+f*R+m*L+g*O,a[3]=_*S+v*b+x*C+M*U,a[7]=_*E+v*A+x*P+M*I,a[11]=_*T+v*w+x*D+M*N,a[15]=_*y+v*R+x*L+M*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],n=e[1],s=e[5],o=e[9],l=e[13],h=e[2],c=e[6],u=e[10],d=e[14],p=e[3],f=e[7],m=e[11],g=e[15],_=o*d-l*u,v=s*d-l*c,x=s*u-o*c,M=n*d-l*h,S=n*u-o*h,E=n*c-s*h;return t*(f*_-m*v+g*x)-i*(p*_-m*M+g*S)+r*(p*v-f*M+g*E)-a*(p*x-f*S+m*E)}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],s=e[5],o=e[6],l=e[7],h=e[8],c=e[9],u=e[10],d=e[11],p=e[12],f=e[13],m=e[14],g=e[15],_=t*s-i*n,v=t*o-r*n,x=t*l-a*n,M=i*o-r*s,S=i*l-a*s,E=r*l-a*o,T=h*f-c*p,y=h*m-u*p,b=h*g-d*p,A=c*m-u*f,w=c*g-d*f,R=u*g-d*m,C=_*R-v*w+x*A+M*b-S*y+E*T;if(0===C)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return e[0]=(s*R-o*w+l*A)*P,e[1]=(r*w-i*R-a*A)*P,e[2]=(f*E-m*S+g*M)*P,e[3]=(u*S-c*E-d*M)*P,e[4]=(o*b-n*R-l*y)*P,e[5]=(t*R-r*b+a*y)*P,e[6]=(m*x-p*E-g*v)*P,e[7]=(h*E-u*x+d*v)*P,e[8]=(n*w-s*b+l*T)*P,e[9]=(i*b-t*w-a*T)*P,e[10]=(p*S-f*x+g*_)*P,e[11]=(c*x-h*S-d*_)*P,e[12]=(s*y-n*A-o*T)*P,e[13]=(t*A-i*y+r*T)*P,e[14]=(f*v-p*M-m*_)*P,e[15]=(h*M-c*v+u*_)*P,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];return Math.sqrt(Math.max(t,e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,n=e.x,s=e.y,o=e.z,l=a*n,h=a*s;return this.set(l*n+i,l*s-r*o,l*o+r*s,0,l*s+r*o,h*s+i,h*o-r*n,0,l*o-r*s,h*o+r*n,a*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,n){return this.set(1,i,a,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,n=t._y,s=t._z,o=t._w,l=a+a,h=n+n,c=s+s,u=a*l,d=a*h,p=a*c,f=n*h,m=n*c,g=s*c,_=o*l,v=o*h,x=o*c,M=i.x,S=i.y,E=i.z;return r[0]=(1-(f+g))*M,r[1]=(d+x)*M,r[2]=(p-v)*M,r[3]=0,r[4]=(d-x)*S,r[5]=(1-(u+g))*S,r[6]=(m+_)*S,r[7]=0,r[8]=(p+v)*E,r[9]=(m-_)*E,r[10]=(1-(u+f))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinant();if(0===a)return i.set(1,1,1),t.identity(),this;let n=$.set(r[0],r[1],r[2]).length(),s=$.set(r[4],r[5],r[6]).length(),o=$.set(r[8],r[9],r[10]).length();a<0&&(n=-n),ee.copy(this);let l=1/n,h=1/s,c=1/o;return ee.elements[0]*=l,ee.elements[1]*=l,ee.elements[2]*=l,ee.elements[4]*=h,ee.elements[5]*=h,ee.elements[6]*=h,ee.elements[8]*=c,ee.elements[9]*=c,ee.elements[10]*=c,t.setFromRotationMatrix(ee),i.x=n,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,n,s=2e3,o=!1){let l,h,c=this.elements;if(o)l=a/(n-a),h=n*a/(n-a);else if(2e3===s)l=-(n+a)/(n-a),h=-2*n*a/(n-a);else if(2001===s)l=-n/(n-a),h=-n*a/(n-a);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=2*a/(t-e),c[4]=0,c[8]=(t+e)/(t-e),c[12]=0,c[1]=0,c[5]=2*a/(i-r),c[9]=(i+r)/(i-r),c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=h,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,n,s=2e3,o=!1){let l,h,c=this.elements;if(o)l=1/(n-a),h=n/(n-a);else if(2e3===s)l=-2/(n-a),h=-(n+a)/(n-a);else if(2001===s)l=-1/(n-a),h=-a/(n-a);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2/(t-e),c[4]=0,c[8]=0,c[12]=-(t+e)/(t-e),c[1]=0,c[5]=2/(i-r),c[9]=0,c[13]=-(i+r)/(i-r),c[2]=0,c[6]=0,c[10]=l,c[14]=h,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}let $=new P,ee=new J,et=new P(0,0,0),ei=new P(1,1,1),er=new P,ea=new P,en=new P,es=new J,eo=new C;class el{constructor(e=0,t=0,i=0,r=el.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],n=r[4],s=r[8],o=r[1],l=r[5],h=r[9],c=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(y(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-y(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(s,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,a),this._z=0);break;case"ZXY":this._x=Math.asin(y(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-y(c,-1,1)),.9999999>Math.abs(c)?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(y(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,a)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-y(n,-1,1)),.9999999>Math.abs(n)?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:m("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return es.makeRotationFromQuaternion(e),this.setFromRotationMatrix(es,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}el.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&1<<e)!=0}}let ec=0,eu=new P,ed=new C,ep=new J,ef=new P,em=new P,eg=new P,e_=new C,ev=new P(1,0,0),ex=new P(0,1,0),eM=new P(0,0,1),eS={type:"added"},eE={type:"removed"},eT={type:"childadded",child:null},ey={type:"childremoved",child:null};class eb extends x{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=T(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eb.DEFAULT_UP.clone();let e=new P,t=new el,i=new C,r=new P(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new J},normalMatrix:{value:new U}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=eb.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=eb.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ed.setFromAxisAngle(e,t),this.quaternion.multiply(ed),this}rotateOnWorldAxis(e,t){return ed.setFromAxisAngle(e,t),this.quaternion.premultiply(ed),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(ex,e)}rotateZ(e){return this.rotateOnAxis(eM,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(ex,e)}translateZ(e){return this.translateOnAxis(eM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ep.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ef.copy(e):ef.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),em.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ep.lookAt(em,ef,this.up):ep.lookAt(ef,em,this.up),this.quaternion.setFromRotationMatrix(ep),r&&(ep.extractRotation(r.matrixWorld),ed.setFromRotationMatrix(ep),this.quaternion.premultiply(ed.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?g("Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eS),eT.child=e,this.dispatchEvent(eT),eT.child=null):g("Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return -1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eE),ey.child=e,this.dispatchEvent(ey),ey.child=null),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ep.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),ep.multiply(e.parent.matrixWorld)),e.applyMatrix4(ep),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eS),eT.child=e,this.dispatchEvent(eT),eT.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let r=this.children[i].getObjectByProperty(e,t);if(void 0!==r)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,n=r.length;a<n;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(em,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(em,e_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(null!==e){let t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),!0===t){let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function a(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),0!==this.renderOrder&&(r.renderOrder=this.renderOrder),!1!==this.static&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),null!==this.pivot&&(r.pivot=this.pivot.toArray()),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),void 0!==this.morphTargetDictionary&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),void 0!==this.morphTargetInfluences&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),null!==this._colorsTexture&&(r.colorsTexture=this._colorsTexture.toJSON(e)),null!==this.boundingSphere&&(r.boundingSphere=this.boundingSphere.toJSON()),null!==this.boundingBox&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(void 0!==t&&void 0!==t.shapes){let i=t.shapes;if(Array.isArray(i))for(let t=0,r=i.length;t<r;t++){let r=i[t];a(e.shapes,r)}else a(e.shapes,i)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){let t=[];for(let i=0,r=this.material.length;i<r;i++)t.push(a(e.materials,this.material[i]));r.material=t}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let i=this.animations[t];r.animations.push(a(e.animations,i))}}if(t){let t=n(e.geometries),r=n(e.materials),a=n(e.textures),s=n(e.images),o=n(e.shapes),l=n(e.skeletons),h=n(e.animations),c=n(e.nodes);t.length>0&&(i.geometries=t),r.length>0&&(i.materials=r),a.length>0&&(i.textures=a),s.length>0&&(i.images=s),o.length>0&&(i.shapes=o),l.length>0&&(i.skeletons=l),h.length>0&&(i.animations=h),c.length>0&&(i.nodes=c)}return i.object=r,i;function n(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),null!==e.pivot&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}}eb.DEFAULT_UP=new P(0,1,0),eb.DEFAULT_MATRIX_AUTO_UPDATE=!0,eb.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class eA extends eb{constructor(){super(),this.isGroup=!0,this.type="Group"}}let ew={type:"move"};class eR{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new eA,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new eA,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new eA,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(l&&e.hand){for(let r of(n=!0,e.hand.values())){let e=t.getJointPose(r,i),a=this._getHandJoint(l,r);null!==e&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=e.radius),a.visible=null!==e}let r=l.joints["index-finger-tip"],a=l.joints["thumb-tip"],s=r.position.distanceTo(a.position);l.inputState.pinching&&s>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&s<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&null!==(a=t.getPose(e.gripSpace,i))&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1);null!==s&&(null===(r=t.getPose(e.targetRaySpace,i))&&null!==a&&(r=a),null!==r&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return null!==s&&(s.visible=null!==r),null!==o&&(o.visible=null!==a),null!==l&&(l.visible=null!==n),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new eA;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}let eC={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32},eP={h:0,s:0,l:0},eD={h:0,s:0,l:0};function eL(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}class eU{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){return void 0===t&&void 0===i?e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e):this.setRGB(e,t,i),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=s){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,F.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=F.workingColorSpace){return this.r=e,this.g=t,this.b=i,F.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=F.workingColorSpace){var a;if(e=(e%1+(a=1))%a,t=y(t,0,1),i=y(i,0,1),0===t)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eL(a,r,e+1/3),this.g=eL(a,r,e),this.b=eL(a,r,e-1/3)}return F.colorSpaceToWorking(this,r),this}setStyle(e,t=s){let i;function r(t){void 0!==t&&1>parseFloat(t)&&m("Color: Alpha component of "+e+" will be ignored.")}if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:m("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(3===a)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(6===a)return this.setHex(parseInt(r,16),t);m("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=s){let i=eC[e.toLowerCase()];return void 0!==i?this.setHex(i,t):m("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=B(e.r),this.g=B(e.g),this.b=B(e.b),this}copyLinearToSRGB(e){return this.r=H(e.r),this.g=H(e.g),this.b=H(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=s){return F.workingToColorSpace(eI.copy(this),e),65536*Math.round(y(255*eI.r,0,255))+256*Math.round(y(255*eI.g,0,255))+Math.round(y(255*eI.b,0,255))}getHexString(e=s){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=F.workingColorSpace){let i,r;F.workingToColorSpace(eI.copy(this),t);let a=eI.r,n=eI.g,s=eI.b,o=Math.max(a,n,s),l=Math.min(a,n,s),h=(l+o)/2;if(l===o)i=0,r=0;else{let e=o-l;switch(r=h<=.5?e/(o+l):e/(2-o-l),o){case a:i=(n-s)/e+6*(n<s);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4}i/=6}return e.h=i,e.s=r,e.l=h,e}getRGB(e,t=F.workingColorSpace){return F.workingToColorSpace(eI.copy(this),t),e.r=eI.r,e.g=eI.g,e.b=eI.b,e}getStyle(e=s){F.workingToColorSpace(eI.copy(this),e);let t=eI.r,i=eI.g,r=eI.b;return e!==s?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(eP),this.setHSL(eP.h+e,eP.s+t,eP.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){var i,r,a,n,s,o,l,h,c;this.getHSL(eP),e.getHSL(eD);let u=(i=eP.h,r=eD.h,(1-(a=t))*i+a*r),d=(n=eP.s,s=eD.s,(1-(o=t))*n+o*s),p=(l=eP.l,h=eD.l,(1-(c=t))*l+c*h);return this.setHSL(u,d,p),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let eI=new eU;eU.NAMES=eC;class eN extends eb{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new el,this.environmentIntensity=1,this.environmentRotation=new el,this.overrideMaterial=null,"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),1!==this.environmentIntensity&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}let eO=new P,eF=new P,eB=new P,eH=new P,ez=new P,eG=new P,eV=new P,ek=new P,eW=new P,eX=new P,ej=new Y,eY=new Y,eq=new Y;class eK{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),eO.subVectors(e,t),r.cross(eO);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){eO.subVectors(r,t),eF.subVectors(i,t),eB.subVectors(e,t);let n=eO.dot(eO),s=eO.dot(eF),o=eO.dot(eB),l=eF.dot(eF),h=eF.dot(eB),c=n*l-s*s;if(0===c)return a.set(0,0,0),null;let u=1/c,d=(l*o-s*h)*u,p=(n*h-s*o)*u;return a.set(1-d-p,p,d)}static containsPoint(e,t,i,r){return null!==this.getBarycoord(e,t,i,r,eH)&&eH.x>=0&&eH.y>=0&&eH.x+eH.y<=1}static getInterpolation(e,t,i,r,a,n,s,o){return null===this.getBarycoord(e,t,i,r,eH)?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,eH.x),o.addScaledVector(n,eH.y),o.addScaledVector(s,eH.z),o)}static getInterpolatedAttribute(e,t,i,r,a,n){return ej.setScalar(0),eY.setScalar(0),eq.setScalar(0),ej.fromBufferAttribute(e,t),eY.fromBufferAttribute(e,i),eq.fromBufferAttribute(e,r),n.setScalar(0),n.addScaledVector(ej,a.x),n.addScaledVector(eY,a.y),n.addScaledVector(eq,a.z),n}static isFrontFacing(e,t,i,r){return eO.subVectors(i,t),eF.subVectors(e,t),0>eO.cross(eF).dot(r)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return eO.subVectors(this.c,this.b),eF.subVectors(this.a,this.b),.5*eO.cross(eF).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return eK.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return eK.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return eK.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return eK.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return eK.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,r,a=this.a,n=this.b,s=this.c;ez.subVectors(n,a),eG.subVectors(s,a),ek.subVectors(e,a);let o=ez.dot(ek),l=eG.dot(ek);if(o<=0&&l<=0)return t.copy(a);eW.subVectors(e,n);let h=ez.dot(eW),c=eG.dot(eW);if(h>=0&&c<=h)return t.copy(n);let u=o*c-h*l;if(u<=0&&o>=0&&h<=0)return i=o/(o-h),t.copy(a).addScaledVector(ez,i);eX.subVectors(e,s);let d=ez.dot(eX),p=eG.dot(eX);if(p>=0&&d<=p)return t.copy(s);let f=d*l-o*p;if(f<=0&&l>=0&&p<=0)return r=l/(l-p),t.copy(a).addScaledVector(eG,r);let m=h*p-d*c;if(m<=0&&c-h>=0&&d-p>=0)return eV.subVectors(s,n),r=(c-h)/(c-h+(d-p)),t.copy(n).addScaledVector(eV,r);let g=1/(m+f+u);return i=f*g,r=u*g,t.copy(a).addScaledVector(ez,i).addScaledVector(eG,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eZ{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(eJ.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(eJ.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=eJ.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(void 0!==i){let r=i.getAttribute("position");if(!0===t&&void 0!==r&&!0!==e.isInstancedMesh)for(let t=0,i=r.count;t<i;t++)!0===e.isMesh?e.getVertexPosition(t,eJ):eJ.fromBufferAttribute(r,t),eJ.applyMatrix4(e.matrixWorld),this.expandByPoint(eJ);else void 0!==e.boundingBox?(null===e.boundingBox&&e.computeBoundingBox(),e$.copy(e.boundingBox)):(null===i.boundingBox&&i.computeBoundingBox(),e$.copy(i.boundingBox)),e$.applyMatrix4(e.matrixWorld),this.union(e$)}let r=e.children;for(let e=0,i=r.length;e<i;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,eJ),eJ.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(e8),e6.subVectors(this.max,e8),e0.subVectors(e.a,e8),e1.subVectors(e.b,e8),e3.subVectors(e.c,e8),e2.subVectors(e1,e0),e4.subVectors(e3,e1),e5.subVectors(e0,e3);let t=[0,-e2.z,e2.y,0,-e4.z,e4.y,0,-e5.z,e5.y,e2.z,0,-e2.x,e4.z,0,-e4.x,e5.z,0,-e5.x,-e2.y,e2.x,0,-e4.y,e4.x,0,-e5.y,e5.x,0];return!!te(t,e0,e1,e3,e6)&&!!te(t=[1,0,0,0,1,0,0,0,1],e0,e1,e3,e6)&&(e9.crossVectors(e2,e4),te(t=[e9.x,e9.y,e9.z],e0,e1,e3,e6))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,eJ).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(eJ).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(eQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),eQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),eQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),eQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),eQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),eQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),eQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),eQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(eQ)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}let eQ=[new P,new P,new P,new P,new P,new P,new P,new P],eJ=new P,e$=new eZ,e0=new P,e1=new P,e3=new P,e2=new P,e4=new P,e5=new P,e8=new P,e6=new P,e9=new P,e7=new P;function te(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){e7.fromArray(e,n);let s=a.x*Math.abs(e7.x)+a.y*Math.abs(e7.y)+a.z*Math.abs(e7.z),o=t.dot(e7),l=i.dot(e7),h=r.dot(e7);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>s)return!1}return!0}let tt=new P,ti=new R,tr=0;class ta{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tr++}),this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXY(t,ti.x,ti.y);else if(3===this.itemSize)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=b(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=A(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=b(t,this.array)),t}setX(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=b(t,this.array)),t}setY(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=b(t,this.array)),t}setZ(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=b(t,this.array)),t}setW(e,t){return this.normalized&&(t=A(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array),r=A(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=A(t,this.array),i=A(i,this.array),r=A(r,this.array),a=A(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),35044!==this.usage&&(e.usage=this.usage),e}}class tn extends ta{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ts extends ta{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class to extends ta{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tl=new eZ,th=new P,tc=new P;class tu{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):tl.setFromPoints(e).getCenter(i);let r=0;for(let t=0,a=e.length;t<a;t++)r=Math.max(r,i.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;th.subVectors(e,this.center);let t=th.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),i=(e-this.radius)*.5;this.center.addScaledVector(th,i/e),this.radius+=i}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(th.copy(e.center).add(tc)),this.expandByPoint(th.copy(e.center).sub(tc)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let td=0,tp=new J,tf=new eb,tm=new P,tg=new eZ,t_=new eZ,tv=new P;class tx extends x{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=T(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(!function(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}(e)?tn:ts)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let t=new U().getNormalMatrix(e);i.applyNormalMatrix(t),i.needsUpdate=!0}let r=this.attributes.tangent;return void 0!==r&&(r.transformDirection(e),r.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return tp.makeRotationFromQuaternion(e),this.applyMatrix4(tp),this}rotateX(e){return tp.makeRotationX(e),this.applyMatrix4(tp),this}rotateY(e){return tp.makeRotationY(e),this.applyMatrix4(tp),this}rotateZ(e){return tp.makeRotationZ(e),this.applyMatrix4(tp),this}translate(e,t,i){return tp.makeTranslation(e,t,i),this.applyMatrix4(tp),this}scale(e,t,i){return tp.makeScale(e,t,i),this.applyMatrix4(tp),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tm).negate(),this.translate(tm.x,tm.y,tm.z),this}setFromPoints(e){let t=this.getAttribute("position");if(void 0===t){let t=[];for(let i=0,r=e.length;i<r;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}this.setAttribute("position",new to(t,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let i=e[r];t.setXYZ(r,i.x,i.y,i.z||0)}e.length>t.count&&m("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new eZ);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){g("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tg.setFromBufferAttribute(i),this.morphTargetsRelative?(tv.addVectors(this.boundingBox.min,tg.min),this.boundingBox.expandByPoint(tv),tv.addVectors(this.boundingBox.max,tg.max),this.boundingBox.expandByPoint(tv)):(this.boundingBox.expandByPoint(tg.min),this.boundingBox.expandByPoint(tg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&g('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new tu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){g("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(tg.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];t_.setFromBufferAttribute(i),this.morphTargetsRelative?(tv.addVectors(tg.min,t_.min),tg.expandByPoint(tv),tv.addVectors(tg.max,t_.max),tg.expandByPoint(tv)):(tg.expandByPoint(t_.min),tg.expandByPoint(t_.max))}tg.getCenter(i);let r=0;for(let t=0,a=e.count;t<a;t++)tv.fromBufferAttribute(e,t),r=Math.max(r,i.distanceToSquared(tv));if(t)for(let a=0,n=t.length;a<n;a++){let n=t[a],s=this.morphTargetsRelative;for(let t=0,a=n.count;t<a;t++)tv.fromBufferAttribute(n,t),s&&(tm.fromBufferAttribute(e,t),tv.add(tm)),r=Math.max(r,i.distanceToSquared(tv))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&g('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)return void g("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,a=t.uv;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new ta(new Float32Array(4*i.count),4));let n=this.getAttribute("tangent"),s=[],o=[];for(let e=0;e<i.count;e++)s[e]=new P,o[e]=new P;let l=new P,h=new P,c=new P,u=new R,d=new R,p=new R,f=new P,m=new P,_=this.groups;0===_.length&&(_=[{start:0,count:e.count}]);for(let t=0,r=_.length;t<r;++t){let r=_[t],n=r.start,g=r.count;for(let t=n,r=n+g;t<r;t+=3)!function(e,t,r){l.fromBufferAttribute(i,e),h.fromBufferAttribute(i,t),c.fromBufferAttribute(i,r),u.fromBufferAttribute(a,e),d.fromBufferAttribute(a,t),p.fromBufferAttribute(a,r),h.sub(l),c.sub(l),d.sub(u),p.sub(u);let n=1/(d.x*p.y-p.x*d.y);isFinite(n)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(c,-d.y).multiplyScalar(n),m.copy(c).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(n),s[e].add(f),s[t].add(f),s[r].add(f),o[e].add(m),o[t].add(m),o[r].add(m))}(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new P,x=new P,M=new P,S=new P;function E(e){M.fromBufferAttribute(r,e),S.copy(M);let t=s[e];v.copy(t),v.sub(M.multiplyScalar(M.dot(t))).normalize(),x.crossVectors(S,t);let i=0>x.dot(o[e])?-1:1;n.setXYZW(e,v.x,v.y,v.z,i)}for(let t=0,i=_.length;t<i;++t){let i=_[t],r=i.start,a=i.count;for(let t=r,i=r+a;t<i;t+=3)E(e.getX(t+0)),E(e.getX(t+1)),E(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new ta(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);let r=new P,a=new P,n=new P,s=new P,o=new P,l=new P,h=new P,c=new P;if(e)for(let u=0,d=e.count;u<d;u+=3){let d=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),n.fromBufferAttribute(t,f),h.subVectors(n,a),c.subVectors(r,a),h.cross(c),s.fromBufferAttribute(i,d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,f),s.add(h),o.add(h),l.add(h),i.setXYZ(d,s.x,s.y,s.z),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let e=0,s=t.count;e<s;e+=3)r.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),n.fromBufferAttribute(t,e+2),h.subVectors(n,a),c.subVectors(r,a),h.cross(c),i.setXYZ(e+0,h.x,h.y,h.z),i.setXYZ(e+1,h.x,h.y,h.z),i.setXYZ(e+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tv.fromBufferAttribute(e,t),tv.normalize(),e.setXYZ(t,tv.x,tv.y,tv.z)}toNonIndexed(){function e(e,t){let i=e.array,r=e.itemSize,a=e.normalized,n=new i.constructor(t.length*r),s=0,o=0;for(let a=0,l=t.length;a<l;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*r;for(let e=0;e<r;e++)n[o++]=i[s++]}return new ta(n,r,a)}if(null===this.index)return m("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new tx,i=this.index.array,r=this.attributes;for(let a in r){let n=e(r[a],i);t.setAttribute(a,n)}let a=this.morphAttributes;for(let r in a){let n=[],s=a[r];for(let t=0,r=s.length;t<r;t++){let r=e(s[t],i);n.push(r)}t.morphAttributes[r]=n}t.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let e=0,i=n.length;e<i;e++){let i=n[e];t.addGroup(i.start,i.count,i.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let t in i){let r=i[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},a=!1;for(let t in this.morphAttributes){let i=this.morphAttributes[t],n=[];for(let t=0,r=i.length;t<r;t++){let r=i[t];n.push(r.toJSON(e.data))}n.length>0&&(r[t]=n,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));let s=this.boundingSphere;return null!==s&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone());let r=e.attributes;for(let e in r){let i=r[e];this.setAttribute(e,i.clone(t))}let a=e.morphAttributes;for(let e in a){let i=[],r=a[e];for(let e=0,a=r.length;e<a;e++)i.push(r[e].clone(t));this.morphAttributes[e]=i}this.morphTargetsRelative=e.morphTargetsRelative;let n=e.groups;for(let e=0,t=n.length;e<t;e++){let t=n[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;null!==s&&(this.boundingBox=s.clone());let o=e.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tM=0;class tS extends x{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=T(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new eU(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){m(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(void 0===r){m(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),void 0!==this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),void 0!==this.dispersion&&(i.dispersion=this.dispersion),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),void 0!==this.anisotropy&&(i.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapRotation&&(i.envMapRotation=this.envMapRotation.toArray()),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),0!==this.side&&(i.side=this.side),!0===this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=!0),204!==this.blendSrc&&(i.blendSrc=this.blendSrc),205!==this.blendDst&&(i.blendDst=this.blendDst),100!==this.blendEquation&&(i.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(i.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(i.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(i.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(i.depthFunc=this.depthFunc),!1===this.depthTest&&(i.depthTest=this.depthTest),!1===this.depthWrite&&(i.depthWrite=this.depthWrite),!1===this.colorWrite&&(i.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(i.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(i.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(i.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(i.stencilFuncMask=this.stencilFuncMask),7680!==this.stencilFail&&(i.stencilFail=this.stencilFail),7680!==this.stencilZFail&&(i.stencilZFail=this.stencilZFail),7680!==this.stencilZPass&&(i.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(i.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaHash&&(i.alphaHash=!0),!0===this.alphaToCoverage&&(i.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=!0),!0===this.forceSinglePass&&(i.forceSinglePass=!0),!1===this.allowOverride&&(i.allowOverride=!1),!0===this.wireframe&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=!0),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let t=r(e.textures),a=r(e.images);t.length>0&&(i.textures=t),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let e=t.length;i=Array(e);for(let r=0;r!==e;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}}let tE=new P,tT=new P,ty=new P,tb=new P,tA=new P,tw=new P,tR=new P;class tC{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tE)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tE.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tE.copy(this.origin).addScaledVector(this.direction,t),tE.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){let a,n,s,o;tT.copy(e).add(t).multiplyScalar(.5),ty.copy(t).sub(e).normalize(),tb.copy(this.origin).sub(tT);let l=.5*e.distanceTo(t),h=-this.direction.dot(ty),c=tb.dot(this.direction),u=-tb.dot(ty),d=tb.lengthSq(),p=Math.abs(1-h*h);if(p>0)if(a=h*u-c,n=h*c-u,o=l*p,a>=0)if(n>=-o)if(n<=o){let e=1/p;a*=e,n*=e,s=a*(a+h*n+2*c)+n*(h*a+n+2*u)+d}else s=-(a=Math.max(0,-(h*(n=l)+c)))*a+n*(n+2*u)+d;else s=-(a=Math.max(0,-(h*(n=-l)+c)))*a+n*(n+2*u)+d;else n<=-o?(n=(a=Math.max(0,-(-h*l+c)))>0?-l:Math.min(Math.max(-l,-u),l),s=-a*a+n*(n+2*u)+d):n<=o?(a=0,s=(n=Math.min(Math.max(-l,-u),l))*(n+2*u)+d):(n=(a=Math.max(0,-(h*l+c)))>0?l:Math.min(Math.max(-l,-u),l),s=-a*a+n*(n+2*u)+d);else n=h>0?-l:l,s=-(a=Math.max(0,-(h*n+c)))*a+n*(n+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(tT).addScaledVector(ty,n),s}intersectSphere(e,t){tE.subVectors(e.center,this.origin);let i=tE.dot(this.direction),r=tE.dot(tE)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||s>r)||((s>i||i!=i)&&(i=s),(o<r||r!=r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return null!==this.intersectBox(e,tE)}intersectTriangle(e,t,i,r,a){tA.subVectors(t,e),tw.subVectors(i,e),tR.crossVectors(tA,tw);let n=this.direction.dot(tR),s;if(n>0){if(r)return null;s=1}else{if(!(n<0))return null;s=-1,n=-n}tb.subVectors(this.origin,e);let o=s*this.direction.dot(tw.crossVectors(tb,tw));if(o<0)return null;let l=s*this.direction.dot(tA.cross(tb));if(l<0||o+l>n)return null;let h=-s*tb.dot(tR);return h<0?null:this.at(h/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tP extends tS{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new eU(0xffffff),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new el,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let tD=new J,tL=new tC,tU=new tu,tI=new P,tN=new P,tO=new P,tF=new P,tB=new P,tH=new P,tz=new P,tG=new P;class tV extends eb{constructor(e=new tx,t=new tP){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){tH.set(0,0,0);for(let i=0,r=a.length;i<r;i++){let r=s[i],o=a[i];0!==r&&(tB.fromBufferAttribute(o,e),n?tH.addScaledVector(tB,r):tH.addScaledVector(tB.sub(t),r))}t.add(tH)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;void 0!==r&&(null===i.boundingSphere&&i.computeBoundingSphere(),tU.copy(i.boundingSphere),tU.applyMatrix4(a),tL.copy(e.ray).recast(e.near),!1===tU.containsPoint(tL.origin)&&(null===tL.intersectSphere(tU,tI)||tL.origin.distanceToSquared(tI)>(e.far-e.near)**2)||(tD.copy(a).invert(),tL.copy(e.ray).applyMatrix4(tD),(null===i.boundingBox||!1!==tL.intersectsBox(i.boundingBox))&&this._computeIntersections(e,t,tL)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(null!==s)if(Array.isArray(n))for(let a=0,o=u.length;a<o;a++){let o=u[a],p=n[o.materialIndex],f=Math.max(o.start,d.start),m=Math.min(s.count,Math.min(o.start+o.count,d.start+d.count));for(let a=f;a<m;a+=3){let n=s.getX(a);(r=tk(this,p,e,i,l,h,c,n,s.getX(a+1),s.getX(a+2)))&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let a=Math.max(0,d.start),o=Math.min(s.count,d.start+d.count);for(let u=a;u<o;u+=3){let a=s.getX(u);(r=tk(this,n,e,i,l,h,c,a,s.getX(u+1),s.getX(u+2)))&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(void 0!==o)if(Array.isArray(n))for(let a=0,s=u.length;a<s;a++){let s=u[a],p=n[s.materialIndex],f=Math.max(s.start,d.start),m=Math.min(o.count,Math.min(s.start+s.count,d.start+d.count));for(let a=f;a<m;a+=3)(r=tk(this,p,e,i,l,h,c,a,a+1,a+2))&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=s.materialIndex,t.push(r))}else{let a=Math.max(0,d.start),s=Math.min(o.count,d.start+d.count);for(let o=a;o<s;o+=3)(r=tk(this,n,e,i,l,h,c,o,o+1,o+2))&&(r.faceIndex=Math.floor(o/3),t.push(r))}}}function tk(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,tN),e.getVertexPosition(l,tO),e.getVertexPosition(h,tF);let c=function(e,t,i,r,a,n,s,o){if(null===(1===t.side?r.intersectTriangle(s,n,a,!0,o):r.intersectTriangle(a,n,s,0===t.side,o)))return null;tG.copy(o),tG.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(tG);return l<i.near||l>i.far?null:{distance:l,point:tG.clone(),object:e}}(e,t,i,r,tN,tO,tF,tz);if(c){let e=new P;eK.getBarycoord(tz,tN,tO,tF,e),a&&(c.uv=eK.getInterpolatedAttribute(a,o,l,h,e,new R)),n&&(c.uv1=eK.getInterpolatedAttribute(n,o,l,h,e,new R)),s&&(c.normal=eK.getInterpolatedAttribute(s,o,l,h,e,new P),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let t={a:o,b:l,c:h,normal:new P,materialIndex:0};eK.getNormal(tN,tO,tF,t.normal),c.face=t,c.barycoord=e}return c}class tW extends j{constructor(e=null,t=1,i=1,r,a,n,s,o,l=1003,h=1003,c,u){super(null,n,s,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let tX=new P,tj=new P,tY=new U;class tq{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tX.subVectors(i,t).cross(tj.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tX),r=this.normal.dot(i);if(0===r)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tY.getNormalMatrix(e),r=this.coplanarPoint(tX).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let tK=new tu,tZ=new R(.5,.5),tQ=new P;class tJ{constructor(e=new tq,t=new tq,i=new tq,r=new tq,a=new tq,n=new tq){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],u=a[6],d=a[7],p=a[8],f=a[9],m=a[10],g=a[11],_=a[12],v=a[13],x=a[14],M=a[15];if(r[0].setComponents(l-n,d-h,g-p,M-_).normalize(),r[1].setComponents(l+n,d+h,g+p,M+_).normalize(),r[2].setComponents(l+s,d+c,g+f,M+v).normalize(),r[3].setComponents(l-s,d-c,g-f,M-v).normalize(),i)r[4].setComponents(o,u,m,x).normalize(),r[5].setComponents(l-o,d-u,g-m,M-x).normalize();else if(r[4].setComponents(l-o,d-u,g-m,M-x).normalize(),2e3===t)r[5].setComponents(l+o,d+u,g+m,M+x).normalize();else if(2001===t)r[5].setComponents(o,u,m,x).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(void 0!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),tK.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),tK.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tK)}intersectsSprite(e){return tK.center.set(0,0,0),tK.radius=.7071067811865476+tZ.distanceTo(e.center),tK.applyMatrix4(e.matrixWorld),this.intersectsSphere(tK)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(tQ.x=r.normal.x>0?e.max.x:e.min.x,tQ.y=r.normal.y>0?e.max.y:e.min.y,tQ.z=r.normal.z>0?e.max.z:e.min.z,0>r.distanceToPoint(tQ))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}}class t$ extends j{constructor(e=[],t=301,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t0 extends j{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class t1 extends j{constructor(e,t,i=1014,r,a,n,s=1003,o=1003,l,h=1026,c=1){if(1026!==h&&1027!==h)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:c},r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new V(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return null!==this.compareFunction&&(t.compareFunction=this.compareFunction),t}}class t3 extends t1{constructor(e,t=1014,i=301,r,a,n=1003,s=1003,o,l=1026){let h={width:e,height:e,depth:1};super(e,e,t,i,r,a,n,s,o,l),this.image=[h,h,h,h,h,h],this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class t2 extends j{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class t4 extends tx{constructor(e=1,t=1,i=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:n};let s=this;r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],u=0,d=0;function p(e,t,i,r,a,n,p,f,m,g,_){let v=n/m,x=p/g,M=n/2,S=p/2,E=f/2,T=m+1,y=g+1,b=0,A=0,w=new P;for(let n=0;n<y;n++){let s=n*x-S;for(let o=0;o<T;o++){let u=o*v-M;w[e]=u*r,w[t]=s*a,w[i]=E,l.push(w.x,w.y,w.z),w[e]=0,w[t]=0,w[i]=f>0?1:-1,h.push(w.x,w.y,w.z),c.push(o/m),c.push(1-n/g),b+=1}}for(let e=0;e<g;e++)for(let t=0;t<m;t++){let i=u+t+T*e,r=u+t+T*(e+1),a=u+(t+1)+T*(e+1),n=u+(t+1)+T*e;o.push(i,r,n),o.push(r,a,n),A+=6}s.addGroup(d,A,_),d+=A,u+=b}p("z","y","x",-1,-1,i,t,e,n=Math.floor(n),a,0),p("z","y","x",1,-1,i,t,-e,n,a,1),p("x","z","y",1,1,e,i,t,r,n,2),p("x","z","y",1,-1,e,i,-t,r,n,3),p("x","y","z",1,-1,e,t,i,r,a,4),p("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(o),this.setAttribute("position",new to(l,3)),this.setAttribute("normal",new to(h,3)),this.setAttribute("uv",new to(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t4(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class t5 extends tx{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,n=t/2,s=Math.floor(i),o=Math.floor(r),l=s+1,h=o+1,c=e/s,u=t/o,d=[],p=[],f=[],m=[];for(let e=0;e<h;e++){let t=e*u-n;for(let i=0;i<l;i++){let r=i*c-a;p.push(r,-t,0),f.push(0,0,1),m.push(i/s),m.push(1-e/o)}}for(let e=0;e<o;e++)for(let t=0;t<s;t++){let i=t+l*e,r=t+l*(e+1),a=t+1+l*(e+1),n=t+1+l*e;d.push(i,r,n),d.push(r,a,n)}this.setIndex(d),this.setAttribute("position",new to(p,3)),this.setAttribute("normal",new to(f,3)),this.setAttribute("uv",new to(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t5(e.width,e.height,e.widthSegments,e.heightSegments)}}function t8(e){let t={};for(let i in e)for(let r in t[i]={},e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(m("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}return t}function t6(e){let t={};for(let i=0;i<e.length;i++){let r=t8(e[i]);for(let e in r)t[e]=r[e]}return t}function t9(e){let t=e.getRenderTarget();return null===t?e.outputColorSpace:!0===t.isXRRenderTarget?t.texture.colorSpace:F.workingColorSpace}let t7={clone:t8};var ie=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,it=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends tS{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ie,this.fragmentShader=it,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=t8(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ir extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends tS{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new eU(0xffffff),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new eU(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new el,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class is extends tS{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class io extends tS{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}let il={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(ih(e)||(this.files[e]=t))},get:function(e){if(!1!==this.enabled&&!ih(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ih(e){try{let t=e.slice(e.indexOf(":")+1);return"blob:"===new URL(t).protocol}catch{return!1}}class ic{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(e){s++,!1===a&&void 0!==r.onStart&&r.onStart(e,n,s),a=!0},this.itemEnd=function(e){n++,void 0!==r.onProgress&&r.onProgress(e,n,s),n===s&&(a=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(e){void 0!==r.onError&&r.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return -1!==t&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=l.length;t<i;t+=2){let i=l[t],r=l[t+1];if(i.global&&(i.lastIndex=0),i.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}let iu=new ic;class id{constructor(e){this.manager=void 0!==e?e:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}id.DEFAULT_MATERIAL_NAME="__DEFAULT";let ip=new WeakMap;class im extends id{constructor(e){super(e)}load(e,t,i,r){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=il.get(`image:${e}`);if(void 0!==n){if(!0===n.complete)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let e=ip.get(n);void 0===e&&(e=[],ip.set(n,e)),e.push({onLoad:t,onError:r})}return n}let s=u("img");function o(){h(),t&&t(this);let i=ip.get(this)||[];for(let e=0;e<i.length;e++){let t=i[e];t.onLoad&&t.onLoad(this)}ip.delete(this),a.manager.itemEnd(e)}function l(t){h(),r&&r(t),il.remove(`image:${e}`);let i=ip.get(this)||[];for(let e=0;e<i.length;e++){let r=i[e];r.onError&&r.onError(t)}ip.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),il.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}}class ig extends id{constructor(e){super(e)}load(e,t,i,r){let a=new j,n=new im(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(e){a.image=e,a.needsUpdate=!0,void 0!==t&&t(a)},i,r),a}}class i_ extends eb{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new eU(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}let iv=new J,ix=new P,iM=new P;class iS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tJ,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Y(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ix.setFromMatrixPosition(e.matrixWorld),t.position.copy(ix),iM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iM),t.updateMatrixWorld(),iv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iv,t.coordinateSystem,t.reversedDepth),2001===t.coordinateSystem||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(iv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 1!==this.intensity&&(e.intensity=this.intensity),0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let iE=new P,iT=new C,iy=new P;class ib extends eb{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(iE,iT,iy),1===iy.x&&1===iy.y&&1===iy.z?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iE,iT,iy.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(iE,iT,iy),1===iy.x&&1===iy.y&&1===iy.z?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iE,iT,iy.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}let iA=new P,iw=new R,iR=new R;class iC extends ib{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*E*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*S*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*E*Math.atan(Math.tan(.5*S*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){iA.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(iA.x,iA.y).multiplyScalar(-e/iA.z),iA.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(iA.x,iA.y).multiplyScalar(-e/iA.z)}getViewSize(e,t){return this.getViewBounds(e,iw,iR),t.subVectors(iR,iw)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*S*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(null!==this.view&&this.view.enabled){let e=n.fullWidth,s=n.fullHeight;a+=n.offsetX*r/e,t-=n.offsetY*i/s,r*=n.width/e,i*=n.height/s}let s=this.filmOffset;0!==s&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class iP extends iS{constructor(){super(new iC(90,1,.5,500)),this.isPointLightShadow=!0}}class iD extends i_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iP}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class iL extends ib{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(null!==this.view&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,n=a+e*this.view.width,s-=t*this.view.offsetY,o=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}class iU extends i_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iI extends eb{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new iC(-90,1,e,t);r.layers=this.layers,this.add(r);let a=new iC(-90,1,e,t);a.layers=this.layers,this.add(a);let n=new iC(-90,1,e,t);n.layers=this.layers,this.add(n);let s=new iC(-90,1,e,t);s.layers=this.layers,this.add(s);let o=new iC(-90,1,e,t);o.layers=this.layers,this.add(o);let l=new iC(-90,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let e of t)this.remove(e);if(2e3===e)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(2001===e)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){null===this.parent&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;m=!0===e.isWebGLRenderer?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,r),m&&!1===e.autoClear&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class iN extends iC{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iO{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,void 0!==e.hidden&&(this._pageVisibilityHandler=iF.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){null!==this._pageVisibilityHandler&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return null!==this._pageVisibilityHandler&&!0===this._document.hidden?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(void 0!==e?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function iF(){!1===this._document.hidden&&this.reset()}class iB{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,m("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class iH{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=y(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(y(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iz extends x{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(void 0===e)return void m("Controls: connect() now requires an element.");null!==this.domElement&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function iG(e,t,i,r){let a=function(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}(r);switch(i){case 1021:return e*t;case 1028:case 1029:return e*t/a.components*a.byteLength;case 1030:case 1031:return e*t*2/a.components*a.byteLength;case 1022:return e*t*3/a.components*a.byteLength;case 1023:case 1033:return e*t*4/a.components*a.byteLength;case 33776:case 33777:case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:case 37496:case 37490:case 37491:case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8}throw Error(`Unable to determine texture byte length for ${i} format.`)}function iV(){let e=null,t=!1,i=null,r=null;function a(t,n){i(t,n),r=e.requestAnimationFrame(a)}return{start:function(){!0!==t&&null!==i&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function ik(e){let t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let r=t.get(i);r&&(e.deleteBuffer(r.buffer),t.delete(i))},update:function(i,r){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let e=t.get(i);(!e||e.version<i.version)&&t.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}let a=t.get(i);if(void 0===a)t.set(i,function(t,i){let r,a=t.array,n=t.usage,s=a.byteLength,o=e.createBuffer();if(e.bindBuffer(i,o),e.bufferData(i,a,n),t.onUploadCallback(),a instanceof Float32Array)r=e.FLOAT;else if("u">typeof Float16Array&&a instanceof Float16Array)r=e.HALF_FLOAT;else if(a instanceof Uint16Array)r=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(a instanceof Int16Array)r=e.SHORT;else if(a instanceof Uint32Array)r=e.UNSIGNED_INT;else if(a instanceof Int32Array)r=e.INT;else if(a instanceof Int8Array)r=e.BYTE;else if(a instanceof Uint8Array)r=e.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)r=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:o,type:r,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:s}}(i,r));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(t,i,r){let a=i.array,n=i.updateRanges;if(e.bindBuffer(r,t),0===n.length)e.bufferSubData(r,0,a);else{n.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<n.length;e++){let i=n[t],r=n[e];r.start<=i.start+i.count+1?i.count=Math.max(i.count,r.start+r.count-i.start):n[++t]=r}n.length=t+1;for(let t=0,i=n.length;t<i;t++){let i=n[t];e.bufferSubData(r,i.start*a.BYTES_PER_ELEMENT,a,i.start,i.count)}i.clearUpdateRanges()}i.onUploadCallback()})(a.buffer,i,r),a.version=i.version}}}}"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),"u">typeof window&&(window.__THREE__?m("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");let iW={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},iX={common:{diffuse:{value:new eU(0xffffff)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new eU(0xffffff)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new eU(0xffffff)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new eU(0xffffff)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},ij={basic:{uniforms:t6([iX.common,iX.specularmap,iX.envmap,iX.aomap,iX.lightmap,iX.fog]),vertexShader:iW.meshbasic_vert,fragmentShader:iW.meshbasic_frag},lambert:{uniforms:t6([iX.common,iX.specularmap,iX.envmap,iX.aomap,iX.lightmap,iX.emissivemap,iX.bumpmap,iX.normalmap,iX.displacementmap,iX.fog,iX.lights,{emissive:{value:new eU(0)},envMapIntensity:{value:1}}]),vertexShader:iW.meshlambert_vert,fragmentShader:iW.meshlambert_frag},phong:{uniforms:t6([iX.common,iX.specularmap,iX.envmap,iX.aomap,iX.lightmap,iX.emissivemap,iX.bumpmap,iX.normalmap,iX.displacementmap,iX.fog,iX.lights,{emissive:{value:new eU(0)},specular:{value:new eU(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:iW.meshphong_vert,fragmentShader:iW.meshphong_frag},standard:{uniforms:t6([iX.common,iX.envmap,iX.aomap,iX.lightmap,iX.emissivemap,iX.bumpmap,iX.normalmap,iX.displacementmap,iX.roughnessmap,iX.metalnessmap,iX.fog,iX.lights,{emissive:{value:new eU(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:iW.meshphysical_vert,fragmentShader:iW.meshphysical_frag},toon:{uniforms:t6([iX.common,iX.aomap,iX.lightmap,iX.emissivemap,iX.bumpmap,iX.normalmap,iX.displacementmap,iX.gradientmap,iX.fog,iX.lights,{emissive:{value:new eU(0)}}]),vertexShader:iW.meshtoon_vert,fragmentShader:iW.meshtoon_frag},matcap:{uniforms:t6([iX.common,iX.bumpmap,iX.normalmap,iX.displacementmap,iX.fog,{matcap:{value:null}}]),vertexShader:iW.meshmatcap_vert,fragmentShader:iW.meshmatcap_frag},points:{uniforms:t6([iX.points,iX.fog]),vertexShader:iW.points_vert,fragmentShader:iW.points_frag},dashed:{uniforms:t6([iX.common,iX.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:iW.linedashed_vert,fragmentShader:iW.linedashed_frag},depth:{uniforms:t6([iX.common,iX.displacementmap]),vertexShader:iW.depth_vert,fragmentShader:iW.depth_frag},normal:{uniforms:t6([iX.common,iX.bumpmap,iX.normalmap,iX.displacementmap,{opacity:{value:1}}]),vertexShader:iW.meshnormal_vert,fragmentShader:iW.meshnormal_frag},sprite:{uniforms:t6([iX.sprite,iX.fog]),vertexShader:iW.sprite_vert,fragmentShader:iW.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:iW.background_vert,fragmentShader:iW.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:iW.backgroundCube_vert,fragmentShader:iW.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:iW.cube_vert,fragmentShader:iW.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:iW.equirect_vert,fragmentShader:iW.equirect_frag},distance:{uniforms:t6([iX.common,iX.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:iW.distance_vert,fragmentShader:iW.distance_frag},shadow:{uniforms:t6([iX.lights,iX.fog,{color:{value:new eU(0)},opacity:{value:1}}]),vertexShader:iW.shadow_vert,fragmentShader:iW.shadow_frag}};ij.physical={uniforms:t6([ij.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new eU(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new eU(0)},specularColor:{value:new eU(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:iW.meshphysical_vert,fragmentShader:iW.meshphysical_frag};let iY={r:0,b:0,g:0},iq=new el,iK=new J;function iZ(e,t,i,r,a,n){let s=new eU(0),o=+(!0!==a),l,c,u=null,d=0,p=null;function f(e){let i=!0===e.isScene?e.background:null;if(i&&i.isTexture){let r=e.backgroundBlurriness>0;i=t.get(i,r)}return i}function m(t,r){t.getRGB(iY,t9(e)),i.buffers.color.setClear(iY.r,iY.g,iY.b,r,n)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),m(s,o=t)},getClearAlpha:function(){return o},setClearAlpha:function(e){m(s,o=e)},render:function(t){let r=!1,a=f(t);null===a?m(s,o):a&&a.isColor&&(m(a,1),r=!0);let l=e.xr.getEnvironmentBlendMode();"additive"===l?i.buffers.color.setClear(0,0,0,1,n):"alpha-blend"===l&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||r)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(t,i){let a=f(i);a&&(a.isCubeTexture||306===a.mapping)?(void 0===c&&((c=new tV(new t4(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:t8(ij.backgroundCube.uniforms),vertexShader:ij.backgroundCube.vertexShader,fragmentShader:ij.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}))).geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),iq.copy(i.backgroundRotation),iq.x*=-1,iq.y*=-1,iq.z*=-1,a.isCubeTexture&&!1===a.isRenderTargetTexture&&(iq.y*=-1,iq.z*=-1),c.material.uniforms.envMap.value=a,c.material.uniforms.flipEnvMap.value=a.isCubeTexture&&!1===a.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=i.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=i.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iK.makeRotationFromEuler(iq)),c.material.toneMapped=F.getTransfer(a.colorSpace)!==h,(u!==a||d!==a.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=a,d=a.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null)):a&&a.isTexture&&(void 0===l&&((l=new tV(new t5(2,2),new ii({name:"BackgroundMaterial",uniforms:t8(ij.background.uniforms),vertexShader:ij.background.vertexShader,fragmentShader:ij.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=a,l.material.uniforms.backgroundIntensity.value=i.backgroundIntensity,l.material.toneMapped=F.getTransfer(a.colorSpace)!==h,!0===a.matrixAutoUpdate&&a.updateMatrix(),l.material.uniforms.uvTransform.value.copy(a.matrix),(u!==a||d!==a.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,u=a,d=a.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){void 0!==c&&(c.geometry.dispose(),c.material.dispose(),c=void 0),void 0!==l&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function iQ(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=h(null),n=a,s=!1;function o(t){return e.bindVertexArray(t)}function l(t){return e.deleteVertexArray(t)}function h(e){let t=[],r=[],a=[];for(let e=0;e<i;e++)t[e]=0,r[e]=0,a[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:a,object:e,attributes:{},index:null}}function c(){let e=n.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function u(e){d(e,0)}function d(t,i){let r=n.newAttributes,a=n.enabledAttributes,s=n.attributeDivisors;r[t]=1,0===a[t]&&(e.enableVertexAttribArray(t),a[t]=1),s[t]!==i&&(e.vertexAttribDivisor(t,i),s[t]=i)}function p(){let t=n.newAttributes,i=n.enabledAttributes;for(let r=0,a=i.length;r<a;r++)i[r]!==t[r]&&(e.disableVertexAttribArray(r),i[r]=0)}function f(t,i,r,a,n,s,o){!0===o?e.vertexAttribIPointer(t,i,r,n,s):e.vertexAttribPointer(t,i,r,a,n,s)}function m(){g(),s=!0,n!==a&&o((n=a).object)}function g(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:function(i,a,l,m,g){let _=!1,v=function(t,i,a,n){let s=!0===n.wireframe,o=r[i.id];void 0===o&&(o={},r[i.id]=o);let l=!0===t.isInstancedMesh?t.id:0,c=o[l];void 0===c&&(c={},o[l]=c);let u=c[a.id];void 0===u&&(u={},c[a.id]=u);let d=u[s];return void 0===d&&(d=h(e.createVertexArray()),u[s]=d),d}(i,m,l,a);n!==v&&o((n=v).object),(_=function(e,t,i,r){let a=n.attributes,s=t.attributes,o=0,l=i.getAttributes();for(let t in l)if(l[t].location>=0){let i=a[t],r=s[t];if(void 0===r&&("instanceMatrix"===t&&e.instanceMatrix&&(r=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(r=e.instanceColor)),void 0===i||i.attribute!==r||r&&i.data!==r.data)return!0;o++}return n.attributesNum!==o||n.index!==r}(i,m,l,g))&&function(e,t,i,r){let a={},s=t.attributes,o=0,l=i.getAttributes();for(let t in l)if(l[t].location>=0){let i=s[t];void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));let r={};r.attribute=i,i&&i.data&&(r.data=i.data),a[t]=r,o++}n.attributes=a,n.attributesNum=o,n.index=r}(i,m,l,g),null!==g&&t.update(g,e.ELEMENT_ARRAY_BUFFER),(_||s)&&(s=!1,function(i,r,a,n){c();let s=n.attributes,o=a.getAttributes(),l=r.defaultAttributeValues;for(let r in o){let a=o[r];if(a.location>=0){let o=s[r];if(void 0===o&&("instanceMatrix"===r&&i.instanceMatrix&&(o=i.instanceMatrix),"instanceColor"===r&&i.instanceColor&&(o=i.instanceColor)),void 0!==o){let r=o.normalized,s=o.itemSize,l=t.get(o);if(void 0===l)continue;let h=l.buffer,c=l.type,p=l.bytesPerElement,m=c===e.INT||c===e.UNSIGNED_INT||1013===o.gpuType;if(o.isInterleavedBufferAttribute){let t=o.data,l=t.stride,g=o.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)d(a.location+e,t.meshPerAttribute);!0!==i.isInstancedMesh&&void 0===n._maxInstanceCount&&(n._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<a.locationSize;e++)u(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,h);for(let e=0;e<a.locationSize;e++)f(a.location+e,s/a.locationSize,c,r,l*p,(g+s/a.locationSize*e)*p,m)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)d(a.location+e,o.meshPerAttribute);!0!==i.isInstancedMesh&&void 0===n._maxInstanceCount&&(n._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)u(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,h);for(let e=0;e<a.locationSize;e++)f(a.location+e,s/a.locationSize,c,r,s*p,s/a.locationSize*e*p,m)}}else if(void 0!==l){let t=l[r];if(void 0!==t)switch(t.length){case 2:e.vertexAttrib2fv(a.location,t);break;case 3:e.vertexAttrib3fv(a.location,t);break;case 4:e.vertexAttrib4fv(a.location,t);break;default:e.vertexAttrib1fv(a.location,t)}}}}p()}(i,a,l,m),null!==g&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(g).buffer))},reset:m,resetDefaultState:g,dispose:function(){for(let e in m(),r){let t=r[e];for(let e in t){let i=t[e];for(let e in i){let t=i[e];for(let e in t)l(t[e].object),delete t[e];delete i[e]}}delete r[e]}},releaseStatesOfGeometry:function(e){if(void 0===r[e.id])return;let t=r[e.id];for(let e in t){let i=t[e];for(let e in i){let t=i[e];for(let e in t)l(t[e].object),delete t[e];delete i[e]}}delete r[e.id]},releaseStatesOfObject:function(e){for(let t in r){let i=r[t],a=!0===e.isInstancedMesh?e.id:0,n=i[a];if(void 0!==n){for(let e in n){let t=n[e];for(let e in t)l(t[e].object),delete t[e];delete n[e]}delete i[a],0===Object.keys(i).length&&delete r[t]}}},releaseStatesOfProgram:function(e){for(let t in r){let i=r[t];for(let t in i){let r=i[t];if(void 0===r[e.id])continue;let a=r[e.id];for(let e in a)l(a[e].object),delete a[e];delete r[e.id]}}},initAttributes:c,enableAttribute:u,disableUnusedAttributes:p}}function iJ(e,t,i){let r;function a(t,a,n){0!==n&&(e.drawArraysInstanced(r,t,a,n),i.update(a,r,n))}this.setMode=function(e){r=e},this.render=function(t,a){e.drawArrays(r,t,a),i.update(a,r,1)},this.renderInstances=a,this.renderMultiDraw=function(e,a,n){if(0===n)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,e,0,a,0,n);let s=0;for(let e=0;e<n;e++)s+=a[e];i.update(s,r,1)},this.renderMultiDrawInstances=function(e,n,s,o){if(0===s)return;let l=t.get("WEBGL_multi_draw");if(null===l)for(let t=0;t<e.length;t++)a(e[t],n[t],o[t]);else{l.multiDrawArraysInstancedWEBGL(r,e,0,n,0,o,0,s);let t=0;for(let e=0;e<s;e++)t+=n[e]*o[e];i.update(t,r,1)}}}function i$(e,t,i,r){let a;function n(t){if("highp"===t){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=void 0!==i.precision?i.precision:"highp",o=n(s);o!==s&&(m("WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=!0===i.logarithmicDepthBuffer,h=!0===i.reversedDepthBuffer&&t.has("EXT_clip_control"),c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(void 0!==a)return a;if(!0===t.has("EXT_texture_filter_anisotropic")){let i=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a},getMaxPrecision:n,textureFormatReadable:function(t){return 1023===t||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(i){let a=1016===i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(1009!==i&&r.convert(i)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&1015!==i&&!a)},precision:s,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,maxSamples:e.getParameter(e.MAX_SAMPLES),samples:e.getParameter(e.SAMPLES)}}function i0(e){let t=this,i=null,r=0,a=!1,n=!1,s=new tq,o=new U,l={value:null,needsUpdate:!1};function h(e,i,r,a){let n=null!==e?e.length:0,h=null;if(0!==n){if(h=l.value,!0!==a||null===h){let t=r+4*n,a=i.matrixWorldInverse;o.getNormalMatrix(a),(null===h||h.length<t)&&(h=new Float32Array(t));for(let t=0,i=r;t!==n;++t,i+=4)s.copy(e[t]).applyMatrix4(a,o),s.normal.toArray(h,i),h[i+3]=s.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=n,t.numIntersection=0,h}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let i=0!==e.length||t||0!==r||a;return a=t,r=e.length,i},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(e,t){i=h(e,t,0)},this.setState=function(s,o,c){let u=s.clippingPlanes,d=s.clipIntersection,p=s.clipShadows,f=e.get(s);if(a&&null!==u&&0!==u.length&&(!n||p)){let e=n?0:r,t=4*e,a=f.clippingState||null;l.value=a,a=h(u,o,t,c);for(let e=0;e!==t;++e)a[e]=i[e];f.clippingState=a,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=e}else n?h(null):(l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0)}}let i1=[.125,.215,.35,.446,.526,.582],i3=new iL,i2=new eU,i4=null,i5=0,i8=0,i6=!1,i9=new P;class i7{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=i9}=a;i4=this._renderer.getRenderTarget(),i5=this._renderer.getActiveCubeFace(),i8=this._renderer.getActiveMipmapLevel(),i6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=rr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=ri(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose(),null!==this._backgroundBox&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._ggxMaterial&&this._ggxMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(i4,i5,i8),this._renderer.xr.enabled=i6,e.scissorTest=!1,rt(e,0,0,e.width,e.height)}_fromTexture(e,t){301===e.mapping||302===e.mapping?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),i4=this._renderer.getRenderTarget(),i5=this._renderer.getActiveCubeFace(),i8=this._renderer.getActiveMipmapLevel(),i6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:o,depthBuffer:!1},r=re(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){var a,n;null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=re(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=function(e){let t=[],i=[],r=[],a=e,n=e-4+1+i1.length;for(let s=0;s<n;s++){let n=Math.pow(2,a);t.push(n);let o=1/n;s>e-4?o=i1[s-e+4-1]:0===s&&(o=0),i.push(o);let l=1/(n-2),h=-l,c=1+l,u=[h,h,c,h,c,c,h,h,c,c,h,c],d=new Float32Array(108),p=new Float32Array(72),f=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,i=e>2?0:-1,r=[t,i,0,t+2/3,i,0,t+2/3,i+1,0,t,i,0,t+2/3,i+1,0,t,i+1,0];d.set(r,18*e),p.set(u,12*e);let a=[e,e,e,e,e,e];f.set(a,6*e)}let m=new tx;m.setAttribute("position",new ta(d,3)),m.setAttribute("uv",new ta(p,2)),m.setAttribute("faceIndex",new ta(f,1)),r.push(new tV(m,null)),a>4&&a--}return{lodMeshes:r,sizeLods:t,sigmas:i}}(r)),this._blurMaterial=(a=r,new ii({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:new Float32Array(20)},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:new P(0,1,0)}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})),this._ggxMaterial=(n=r,new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return r}_compileMaterial(e){let t=new tV(new tx,e);this._renderer.compile(t,i3)}_sceneToCubeUV(e,t,i,r,a){let n=new iC(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(i2),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),null===this._backgroundBox&&(this._backgroundBox=new tV(new t4,new tP({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));let u=this._backgroundBox,d=u.material,p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(i2),p=!0);for(let t=0;t<6;t++){let i=t%3;0===i?(n.up.set(0,s[t],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[t],a.y,a.z)):1===i?(n.up.set(0,0,s[t]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[t],a.z)):(n.up.set(0,s[t],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[t]));let h=this._cubeSize;rt(r,i*h,t>2?h:0,h,h),l.setRenderTarget(r),p&&l.render(u,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=301===e.mapping||302===e.mapping;r?(null===this._cubemapMaterial&&(this._cubemapMaterial=rr()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=ri());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a,a.uniforms.envMap.value=e;let s=this._cubeSize;rt(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(n,i3)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),{_lodMax:u}=this,d=this._sizeLods[i],p=3*d*(i>u-4?i-u+4:0),f=4*(this._cubeSize-d);o.envMap.value=e.texture,o.roughness.value=c*(0+1.25*l),o.mipInt.value=u-t,rt(a,p,f,3*d,2*d),r.setRenderTarget(a),r.render(s,i3),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=u-i,rt(e,p,f,3*d,2*d),r.setRenderTarget(e),r.render(s,i3)}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;"latitudinal"!==n&&"longitudinal"!==n&&g("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let c=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,p=a/d,f=isFinite(a)?1+Math.floor(3*p):20;f>20&&m(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let _=[],v=0;for(let e=0;e<20;++e){let t=e/p,i=Math.exp(-t*t/2);_.push(i),0===e?v+=i:e<f&&(v+=2*i)}for(let e=0;e<_.length;e++)_[e]=_[e]/v;c.envMap.value=e.texture,c.samples.value=f,c.weights.value=_,c.latitudinal.value="latitudinal"===n,s&&(c.poleAxis.value=s);let{_lodMax:x}=this;c.dTheta.value=d,c.mipInt.value=x-i;let M=this._sizeLods[r],S=4*(this._cubeSize-M);rt(t,3*M*(r>x-4?r-x+4:0),S,3*M,2*M),o.setRenderTarget(t),o.render(h,i3)}}function re(e,t,i){let r=new K(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function rt(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function ri(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rr(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rn extends K{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1};this.texture=new t$([i,i,i,i,i,i]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new t4(5,5,5),a=new ii({name:"CubemapFromEquirect",uniforms:t8(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let n=new tV(r,a),s=t.minFilter;return 1008===t.minFilter&&(t.minFilter=1006),new iI(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(a)}}function rs(e){let t=new WeakMap,i=new WeakMap,r=null;function a(e,t){return 303===t?e.mapping=301:304===t&&(e.mapping=302),e}function n(e){let i=e.target;i.removeEventListener("dispose",n);let r=t.get(i);void 0!==r&&(t.delete(i),r.dispose())}function s(e){let t=e.target;t.removeEventListener("dispose",s);let r=i.get(t);void 0!==r&&(i.delete(t),r.dispose())}return{get:function(o,l=!1){return null==o?null:l?function(t){if(t&&t.isTexture){let a=t.mapping,n=303===a||304===a,o=301===a||302===a;if(n||o){let a=i.get(t),l=void 0!==a?a.texture.pmremVersion:0;if(t.isRenderTargetTexture&&t.pmremVersion!==l)return null===r&&(r=new i7(e)),(a=n?r.fromEquirectangular(t,a):r.fromCubemap(t,a)).texture.pmremVersion=t.pmremVersion,i.set(t,a),a.texture;if(void 0!==a)return a.texture;{let l=t.image;return n&&l&&l.height>0||o&&l&&function(e){let t=0;for(let i=0;i<6;i++)void 0!==e[i]&&t++;return 6===t}(l)?(null===r&&(r=new i7(e)),(a=n?r.fromEquirectangular(t):r.fromCubemap(t)).texture.pmremVersion=t.pmremVersion,i.set(t,a),t.addEventListener("dispose",s),a.texture):null}}}return t}(o):function(i){if(i&&i.isTexture){let r=i.mapping;if(303===r||304===r)if(t.has(i))return a(t.get(i).texture,i.mapping);else{let r=i.image;if(!r||!(r.height>0))return null;{let s=new rn(r.height);return s.fromEquirectangularTexture(e,i),t.set(i,s),i.addEventListener("dispose",n),a(s.texture,i.mapping)}}}return i}(o)},dispose:function(){t=new WeakMap,i=new WeakMap,null!==r&&(r.dispose(),r=null)}}}function ro(e){let t={};function i(i){if(void 0!==t[i])return t[i];let r=e.getExtension(i);return t[i]=r,r}return{has:function(e){return null!==i(e)},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(e){let t=i(e);return null===t&&_("WebGLRenderer: "+e+" extension not supported."),t}}}function rl(e,t,i,r){let a={},n=new WeakMap;function s(e){let o=e.target;for(let e in null!==o.index&&t.remove(o.index),o.attributes)t.remove(o.attributes[e]);o.removeEventListener("dispose",s),delete a[o.id];let l=n.get(o);l&&(t.remove(l),n.delete(o)),r.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,i.memory.geometries--}function o(e){let i=[],r=e.index,a=e.attributes.position,s=0;if(void 0===a)return;if(null!==r){let e=r.array;s=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],a=e[t+1],n=e[t+2];i.push(r,a,a,n,n,r)}}else{let e=a.array;s=a.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,a=t+2;i.push(e,r,r,a,a,e)}}let o=new(a.count>=65535?ts:tn)(i,1);o.version=s;let l=n.get(e);l&&t.remove(l),n.set(e,o)}return{get:function(e,t){return!0===a[t.id]||(t.addEventListener("dispose",s),a[t.id]=!0,i.memory.geometries++),t},update:function(i){let r=i.attributes;for(let i in r)t.update(r[i],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){let t=n.get(e);if(t){let i=e.index;null!==i&&t.version<i.version&&o(e)}else o(e);return n.get(e)}}}function rh(e,t,i){let r,a,n;function s(t,s,o){0!==o&&(e.drawElementsInstanced(r,s,a,t*n,o),i.update(s,r,o))}this.setMode=function(e){r=e},this.setIndex=function(e){a=e.type,n=e.bytesPerElement},this.render=function(t,s){e.drawElements(r,s,a,t*n),i.update(s,r,1)},this.renderInstances=s,this.renderMultiDraw=function(e,n,s){if(0===s)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,n,0,a,e,0,s);let o=0;for(let e=0;e<s;e++)o+=n[e];i.update(o,r,1)},this.renderMultiDrawInstances=function(e,o,l,h){if(0===l)return;let c=t.get("WEBGL_multi_draw");if(null===c)for(let t=0;t<e.length;t++)s(e[t]/n,o[t],h[t]);else{c.multiDrawElementsInstancedWEBGL(r,o,0,a,e,0,h,0,l);let t=0;for(let e=0;e<l;e++)t+=o[e]*h[e];i.update(t,r,1)}}}function rc(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(i,r,a){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=i/3*a;break;case e.LINES:t.lines+=i/2*a;break;case e.LINE_STRIP:t.lines+=a*(i-1);break;case e.LINE_LOOP:t.lines+=a*i;break;case e.POINTS:t.points+=a*i;break;default:g("WebGLInfo: Unknown draw mode:",r)}}}}function ru(e,t,i){let r=new WeakMap,a=new Y;return{update:function(n,s,o){let l=n.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,c=void 0!==h?h.length:0,u=r.get(s);if(void 0===u||u.count!==c){let e=function(){_.dispose(),r.delete(s),s.removeEventListener("dispose",e)};void 0!==u&&u.texture.dispose();let i=void 0!==s.morphAttributes.position,n=void 0!==s.morphAttributes.normal,o=void 0!==s.morphAttributes.color,l=s.morphAttributes.position||[],h=s.morphAttributes.normal||[],d=s.morphAttributes.color||[],p=0;!0===i&&(p=1),!0===n&&(p=2),!0===o&&(p=3);let f=s.attributes.position.count*p,m=1;f>t.maxTextureSize&&(m=Math.ceil(f/t.maxTextureSize),f=t.maxTextureSize);let g=new Float32Array(f*m*4*c),_=new Z(g,f,m,c);_.type=1015,_.needsUpdate=!0;let v=4*p;for(let e=0;e<c;e++){let t=l[e],r=h[e],s=d[e],c=f*m*4*e;for(let e=0;e<t.count;e++){let l=e*v;!0===i&&(a.fromBufferAttribute(t,e),g[c+l+0]=a.x,g[c+l+1]=a.y,g[c+l+2]=a.z,g[c+l+3]=0),!0===n&&(a.fromBufferAttribute(r,e),g[c+l+4]=a.x,g[c+l+5]=a.y,g[c+l+6]=a.z,g[c+l+7]=0),!0===o&&(a.fromBufferAttribute(s,e),g[c+l+8]=a.x,g[c+l+9]=a.y,g[c+l+10]=a.z,g[c+l+11]=4===s.itemSize?a.w:1)}}u={count:c,texture:_,size:new R(f,m)},r.set(s,u),s.addEventListener("dispose",e)}if(!0===n.isInstancedMesh&&null!==n.morphTexture)o.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let i=s.morphTargetsRelative?1:1-t;o.getUniforms().setValue(e,"morphTargetBaseInfluence",i),o.getUniforms().setValue(e,"morphTargetInfluences",l)}o.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),o.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}}}function rd(e,t,i,r,a){let n=new WeakMap;function s(e){let t=e.target;t.removeEventListener("dispose",s),r.releaseStatesOfObject(t),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function(r){let o=a.render.frame,l=r.geometry,h=t.get(r,l);if(n.get(h)!==o&&(t.update(h),n.set(h,o)),r.isInstancedMesh&&(!1===r.hasEventListener("dispose",s)&&r.addEventListener("dispose",s),n.get(r)!==o&&(i.update(r.instanceMatrix,e.ARRAY_BUFFER),null!==r.instanceColor&&i.update(r.instanceColor,e.ARRAY_BUFFER),n.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;n.get(e)!==o&&(e.update(),n.set(e,o))}return h},dispose:function(){n=new WeakMap}}}let rp={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function rf(e,t,i,r,a){let n=new K(t,i,{type:e,depthBuffer:r,stencilBuffer:a}),s=new K(t,i,{type:1016,depthBuffer:!1,stencilBuffer:!1}),o=new tx;o.setAttribute("position",new to([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new to([0,2,0,0,2,0],2));let l=new ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new tV(o,l),u=new iL(-1,1,1,-1,0,1),d=null,p=null,f=!1,m,g=null,_=[],v=!1;this.setSize=function(e,t){n.setSize(e,t),s.setSize(e,t);for(let i=0;i<_.length;i++){let r=_[i];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=(_=e).length>0&&!0===_[0].isRenderPass;let t=n.width,i=n.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,i)}},this.begin=function(e,t){if(f||0===e.toneMapping&&0===_.length)return!1;if(g=t,null!==t){let e=t.width,i=t.height;(n.width!==e||n.height!==i)&&this.setSize(e,i)}return!1===v&&e.setRenderTarget(n),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=m,f=!0;let i=n,r=s;for(let a=0;a<_.length;a++){let n=_[a];if(!1!==n.enabled&&(n.render(e,r,i,t),!1!==n.needsSwap)){let e=i;i=r,r=e}}if(d!==e.outputColorSpace||p!==e.toneMapping){d=e.outputColorSpace,p=e.toneMapping,l.defines={},F.getTransfer(d)===h&&(l.defines.SRGB_TRANSFER="");let t=rp[p];t&&(l.defines[t]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=i.texture,e.setRenderTarget(g),e.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){n.dispose(),s.dispose(),o.dispose(),l.dispose()}}let rm=new j,rg=new t1(1,1),r_=new Z,rv=new Q,rx=new t$,rM=[],rS=[],rE=new Float32Array(16),rT=new Float32Array(9),ry=new Float32Array(4);function rb(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=rM[a];if(void 0===n&&(n=new Float32Array(a),rM[a]=n),0!==t){r.toArray(n,0);for(let r=1,a=0;r!==t;++r)a+=i,e[r].toArray(n,a)}return n}function rA(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function rw(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function rR(e,t){let i=rS[t];void 0===i&&(i=new Int32Array(t),rS[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function rC(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function rP(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rA(i,t))return;e.uniform2fv(this.addr,t),rw(i,t)}}function rD(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(rA(i,t))return;e.uniform3fv(this.addr,t),rw(i,t)}}function rL(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rA(i,t))return;e.uniform4fv(this.addr,t),rw(i,t)}}function rU(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rA(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),rw(i,t)}else{if(rA(i,r))return;ry.set(r),e.uniformMatrix2fv(this.addr,!1,ry),rw(i,r)}}function rI(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rA(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),rw(i,t)}else{if(rA(i,r))return;rT.set(r),e.uniformMatrix3fv(this.addr,!1,rT),rw(i,r)}}function rN(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rA(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),rw(i,t)}else{if(rA(i,r))return;rE.set(r),e.uniformMatrix4fv(this.addr,!1,rE),rw(i,r)}}function rO(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function rF(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rA(i,t))return;e.uniform2iv(this.addr,t),rw(i,t)}}function rB(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rA(i,t))return;e.uniform3iv(this.addr,t),rw(i,t)}}function rH(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rA(i,t))return;e.uniform4iv(this.addr,t),rw(i,t)}}function rz(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function rG(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rA(i,t))return;e.uniform2uiv(this.addr,t),rw(i,t)}}function rV(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rA(i,t))return;e.uniform3uiv(this.addr,t),rw(i,t)}}function rk(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rA(i,t))return;e.uniform4uiv(this.addr,t),rw(i,t)}}function rW(e,t,i){let r,a=this.cache,n=i.allocateTextureUnit();a[0]!==n&&(e.uniform1i(this.addr,n),a[0]=n),this.type===e.SAMPLER_2D_SHADOW?(rg.compareFunction=i.isReversedDepthBuffer()?518:515,r=rg):r=rm,i.setTexture2D(t||r,n)}function rX(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||rv,a)}function rj(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||rx,a)}function rY(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||r_,a)}function rq(e,t){e.uniform1fv(this.addr,t)}function rK(e,t){let i=rb(t,this.size,2);e.uniform2fv(this.addr,i)}function rZ(e,t){let i=rb(t,this.size,3);e.uniform3fv(this.addr,i)}function rQ(e,t){let i=rb(t,this.size,4);e.uniform4fv(this.addr,i)}function rJ(e,t){let i=rb(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function r$(e,t){let i=rb(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function r0(e,t){let i=rb(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function r1(e,t){e.uniform1iv(this.addr,t)}function r3(e,t){e.uniform2iv(this.addr,t)}function r2(e,t){e.uniform3iv(this.addr,t)}function r4(e,t){e.uniform4iv(this.addr,t)}function r5(e,t){e.uniform1uiv(this.addr,t)}function r8(e,t){e.uniform2uiv(this.addr,t)}function r6(e,t){e.uniform3uiv(this.addr,t)}function r9(e,t){e.uniform4uiv(this.addr,t)}function r7(e,t,i){let r,a=this.cache,n=t.length,s=rR(i,n);rA(a,s)||(e.uniform1iv(this.addr,s),rw(a,s)),r=this.type===e.SAMPLER_2D_SHADOW?rg:rm;for(let e=0;e!==n;++e)i.setTexture2D(t[e]||r,s[e])}function ae(e,t,i){let r=this.cache,a=t.length,n=rR(i,a);rA(r,n)||(e.uniform1iv(this.addr,n),rw(r,n));for(let e=0;e!==a;++e)i.setTexture3D(t[e]||rv,n[e])}function at(e,t,i){let r=this.cache,a=t.length,n=rR(i,a);rA(r,n)||(e.uniform1iv(this.addr,n),rw(r,n));for(let e=0;e!==a;++e)i.setTextureCube(t[e]||rx,n[e])}function ai(e,t,i){let r=this.cache,a=t.length,n=rR(i,a);rA(r,n)||(e.uniform1iv(this.addr,n),rw(r,n));for(let e=0;e!==a;++e)i.setTexture2DArray(t[e]||r_,n[e])}class ar{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return rC;case 35664:return rP;case 35665:return rD;case 35666:return rL;case 35674:return rU;case 35675:return rI;case 35676:return rN;case 5124:case 35670:return rO;case 35667:case 35671:return rF;case 35668:case 35672:return rB;case 35669:case 35673:return rH;case 5125:return rz;case 36294:return rG;case 36295:return rV;case 36296:return rk;case 35678:case 36198:case 36298:case 36306:case 35682:return rW;case 35679:case 36299:case 36307:return rX;case 35680:case 36300:case 36308:case 36293:return rj;case 36289:case 36303:case 36311:case 36292:return rY}}(t.type)}}class aa{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return rq;case 35664:return rK;case 35665:return rZ;case 35666:return rQ;case 35674:return rJ;case 35675:return r$;case 35676:return r0;case 5124:case 35670:return r1;case 35667:case 35671:return r3;case 35668:case 35672:return r2;case 35669:case 35673:return r4;case 5125:return r5;case 36294:return r8;case 36295:return r6;case 36296:return r9;case 35678:case 36198:case 36298:case 36306:case 35682:return r7;case 35679:case 36299:case 36307:return ae;case 35680:case 36300:case 36308:case 36293:return at;case 36289:case 36303:case 36311:case 36292:return ai}}(t.type)}}class an{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let n=r[a];n.setValue(e,t[n.id],i)}}}let as=/(\w+)(\])?(\[|\.)?/g;function ao(e,t){e.seq.push(t),e.map[t.id]=t}class al{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);!function(e,t,i){let r=e.name,a=r.length;for(as.lastIndex=0;;){let n=as.exec(r),s=as.lastIndex,o=n[1],l="]"===n[2],h=n[3];if(l&&(o|=0),void 0===h||"["===h&&s+2===a){ao(i,void 0===h?new ar(o,e,t):new aa(o,e,t));break}{let e=i.map[o];void 0===e&&ao(i,e=new an(o)),i=e}}}(i,a,this)}let r=[],a=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):a.push(t);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];void 0!==a&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];void 0!==r&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let n=t[a],s=i[n.id];!1!==s.needsUpdate&&n.setValue(e,s.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let a=e[r];a.id in t&&i.push(a)}return i}}function ah(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}let ac=0,au=new U;function ad(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&""===a)return"";let n=/ERROR: 0:(\d+)/.exec(a);if(!n)return a;{let r=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+function(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let e=a;e<n;e++){let a=e+1;r.push(`${a===t?">":" "} ${a}: ${i[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}}let ap={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"},af=new P;function am(e){return""!==e}function ag(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function a_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let av=/^[ \t]*#include +<([\w\d./]+)>/gm;function ax(e){return e.replace(av,aS)}let aM=new Map;function aS(e,t){let i=iW[t];if(void 0===i){let e=aM.get(t);if(void 0!==e)i=iW[e],m('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw Error("Can not resolve #include <"+t+">")}return ax(i)}let aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aT(e){return e.replace(aE,ay)}function ay(e,t,i,r){let a="";for(let e=parseInt(t);e<parseInt(i);e++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return a}function ab(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}let aA={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"},aw={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"},aR={302:"ENVMAP_MODE_REFRACTION"},aC={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function aP(e,t,i,r){let a,n,s=e.getContext(),o=i.defines,u=i.vertexShader,d=i.fragmentShader,p=aA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC",f=!1===i.envMap?"ENVMAP_TYPE_CUBE":aw[i.envMapMode]||"ENVMAP_TYPE_CUBE",_=!1===i.envMap?"ENVMAP_MODE_REFLECTION":aR[i.envMapMode]||"ENVMAP_MODE_REFLECTION",v=!1===i.envMap?"ENVMAP_BLENDING_NONE":aC[i.combine]||"ENVMAP_BLENDING_NONE",x=function(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}(i),M=[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(am).join(`
`),S=function(e){let t=[];for(let i in e){let r=e[i];!1!==r&&t.push("#define "+i+" "+r)}return t.join(`
`)}(o),E=s.createProgram(),T,y,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?((T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(am).join(`
`)).length>0&&(T+=`
`),(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(am).join(`
`)).length>0&&(y+=`
`)):(T=[ab(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&!1===i.flatShading?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(am).join(`
`),y=[ab(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&!1===i.flatShading?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?iW.tonemapping_pars_fragment:"",0!==i.toneMapping?function(e,t){let i=ap[t];return void 0===i?(m("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",iW.colorspace_pars_fragment,function(e,t){let i=function(e){F._getMatrix(au,F.workingColorSpace,e);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(F.getTransfer(e)){case l:return[t,"LinearTransferOETF"];case h:return[t,"sRGBTransferOETF"];default:return m("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}("linearToOutputTexel",i.outputColorSpace),function(){F.getLuminanceCoefficients(af);let e=af.x.toFixed(4),t=af.y.toFixed(4),i=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(am).join(`
`)),u=a_(u=ag(u=ax(u),i),i),d=a_(d=ag(d=ax(d),i),i),u=aT(u),d=aT(d),!0!==i.isRawShaderMaterial&&(b=`#version 300 es
`,T=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",i.glslVersion===c?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let A=b+T+u,w=b+y+d,R=ah(s,s.VERTEX_SHADER,A),C=ah(s,s.FRAGMENT_SHADER,w);function P(t){if(e.debug.checkShaderErrors){let i=s.getProgramInfoLog(E)||"",r=s.getShaderInfoLog(R)||"",a=s.getShaderInfoLog(C)||"",n=i.trim(),o=r.trim(),l=a.trim(),h=!0,c=!0;if(!1===s.getProgramParameter(E,s.LINK_STATUS))if(h=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(s,E,R,C);else{let e=ad(s,R,"vertex"),i=ad(s,C,"fragment");g("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+i)}else""!==n?m("WebGLProgram: Program Info Log:",n):(""===o||""===l)&&(c=!1);c&&(t.diagnostics={runnable:h,programLog:n,vertexShader:{log:o,prefix:T},fragmentShader:{log:l,prefix:y}})}s.deleteShader(R),s.deleteShader(C),a=new al(s,E),n=function(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let r=e.getActiveAttrib(t,a),n=r.name,s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),i[n]={type:r.type,location:e.getAttribLocation(t,n),locationSize:s}}return i}(s,E)}s.attachShader(E,R),s.attachShader(E,C),void 0!==i.index0AttributeName?s.bindAttribLocation(E,0,i.index0AttributeName):!0===i.morphTargets&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E),this.getUniforms=function(){return void 0===a&&P(this),a},this.getAttributes=function(){return void 0===n&&P(this),n};let D=!1===i.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===D&&(D=s.getProgramParameter(E,37297)),D},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ac++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=C,this}let aD=0;class aL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return!1===n.has(r)&&(n.add(r),r.usedTimes++),!1===n.has(a)&&(n.add(a),a.usedTimes++),this}remove(e){for(let t of this.materialCache.get(e))t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new aU(e),t.set(e,i)),i}}class aU{constructor(e){this.id=aD++,this.code=e,this.usedTimes=0}}function aI(e,t,i,r,a,n){let s=new eh,l=new aL,c=new Set,u=[],d=new Map,p=r.logarithmicDepthBuffer,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(e){return c.add(e),0===e?"uv":`uv${e}`}return{getParameters:function(a,s,u,d,v){let x,M,S,E,T=d.fog,y=v.geometry,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,A=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,w=t.get(a.envMap||b,A),R=w&&306===w.mapping?w.image.height:null,C=g[a.type];null!==a.precision&&(f=r.getMaxPrecision(a.precision))!==a.precision&&m("WebGLProgram.getParameters:",a.precision,"not supported, using",f,"instead.");let P=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,D=void 0!==P?P.length:0,L=0;if(void 0!==y.morphAttributes.position&&(L=1),void 0!==y.morphAttributes.normal&&(L=2),void 0!==y.morphAttributes.color&&(L=3),C){let e=ij[C];x=e.vertexShader,M=e.fragmentShader}else x=a.vertexShader,M=a.fragmentShader,l.update(a),S=l.getVertexShaderID(a),E=l.getFragmentShaderID(a);let U=e.getRenderTarget(),I=e.state.buffers.depth.getReversed(),N=!0===v.isInstancedMesh,O=!0===v.isBatchedMesh,B=!!a.map,H=!!a.matcap,z=!!w,G=!!a.aoMap,V=!!a.lightMap,k=!!a.bumpMap,W=!!a.normalMap,X=!!a.displacementMap,j=!!a.emissiveMap,Y=!!a.metalnessMap,q=!!a.roughnessMap,K=a.anisotropy>0,Z=a.clearcoat>0,Q=a.dispersion>0,J=a.iridescence>0,$=a.sheen>0,ee=a.transmission>0,et=K&&!!a.anisotropyMap,ei=Z&&!!a.clearcoatMap,er=Z&&!!a.clearcoatNormalMap,ea=Z&&!!a.clearcoatRoughnessMap,en=J&&!!a.iridescenceMap,es=J&&!!a.iridescenceThicknessMap,eo=$&&!!a.sheenColorMap,el=$&&!!a.sheenRoughnessMap,eh=!!a.specularMap,ec=!!a.specularColorMap,eu=!!a.specularIntensityMap,ed=ee&&!!a.transmissionMap,ep=ee&&!!a.thicknessMap,ef=!!a.gradientMap,em=!!a.alphaMap,eg=a.alphaTest>0,e_=!!a.alphaHash,ev=!!a.extensions,ex=0;a.toneMapped&&(null===U||!0===U.isXRRenderTarget)&&(ex=e.toneMapping);let eM={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:x,fragmentShader:M,defines:a.defines,customVertexShaderID:S,customFragmentShaderID:E,isRawShaderMaterial:!0===a.isRawShaderMaterial,glslVersion:a.glslVersion,precision:f,batching:O,batchingColor:O&&null!==v._colorsTexture,instancing:N,instancingColor:N&&null!==v.instanceColor,instancingMorph:N&&null!==v.morphTexture,outputColorSpace:null===U?e.outputColorSpace:!0===U.isXRRenderTarget?U.texture.colorSpace:o,alphaToCoverage:!!a.alphaToCoverage,map:B,matcap:H,envMap:z,envMapMode:z&&w.mapping,envMapCubeUVHeight:R,aoMap:G,lightMap:V,bumpMap:k,normalMap:W,displacementMap:X,emissiveMap:j,normalMapObjectSpace:W&&1===a.normalMapType,normalMapTangentSpace:W&&0===a.normalMapType,metalnessMap:Y,roughnessMap:q,anisotropy:K,anisotropyMap:et,clearcoat:Z,clearcoatMap:ei,clearcoatNormalMap:er,clearcoatRoughnessMap:ea,dispersion:Q,iridescence:J,iridescenceMap:en,iridescenceThicknessMap:es,sheen:$,sheenColorMap:eo,sheenRoughnessMap:el,specularMap:eh,specularColorMap:ec,specularIntensityMap:eu,transmission:ee,transmissionMap:ed,thicknessMap:ep,gradientMap:ef,opaque:!1===a.transparent&&1===a.blending&&!1===a.alphaToCoverage,alphaMap:em,alphaTest:eg,alphaHash:e_,combine:a.combine,mapUv:B&&_(a.map.channel),aoMapUv:G&&_(a.aoMap.channel),lightMapUv:V&&_(a.lightMap.channel),bumpMapUv:k&&_(a.bumpMap.channel),normalMapUv:W&&_(a.normalMap.channel),displacementMapUv:X&&_(a.displacementMap.channel),emissiveMapUv:j&&_(a.emissiveMap.channel),metalnessMapUv:Y&&_(a.metalnessMap.channel),roughnessMapUv:q&&_(a.roughnessMap.channel),anisotropyMapUv:et&&_(a.anisotropyMap.channel),clearcoatMapUv:ei&&_(a.clearcoatMap.channel),clearcoatNormalMapUv:er&&_(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ea&&_(a.clearcoatRoughnessMap.channel),iridescenceMapUv:en&&_(a.iridescenceMap.channel),iridescenceThicknessMapUv:es&&_(a.iridescenceThicknessMap.channel),sheenColorMapUv:eo&&_(a.sheenColorMap.channel),sheenRoughnessMapUv:el&&_(a.sheenRoughnessMap.channel),specularMapUv:eh&&_(a.specularMap.channel),specularColorMapUv:ec&&_(a.specularColorMap.channel),specularIntensityMapUv:eu&&_(a.specularIntensityMap.channel),transmissionMapUv:ed&&_(a.transmissionMap.channel),thicknessMapUv:ep&&_(a.thicknessMap.channel),alphaMapUv:em&&_(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(W||K),vertexColors:a.vertexColors,vertexAlphas:!0===a.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,pointsUvs:!0===v.isPoints&&!!y.attributes.uv&&(B||em),fog:!!T,useFog:!0===a.fog,fogExp2:!!T&&T.isFogExp2,flatShading:!1===a.wireframe&&(!0===a.flatShading||void 0===y.attributes.normal&&!1===W&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:!0===a.sizeAttenuation,logarithmicDepthBuffer:p,reversedDepthBuffer:I,skinning:!0===v.isSkinnedMesh,morphTargets:void 0!==y.morphAttributes.position,morphNormals:void 0!==y.morphAttributes.normal,morphColors:void 0!==y.morphAttributes.color,morphTargetsCount:D,morphTextureStride:L,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:ex,decodeVideoTexture:B&&!0===a.map.isVideoTexture&&F.getTransfer(a.map.colorSpace)===h,decodeVideoTextureEmissive:j&&!0===a.emissiveMap.isVideoTexture&&F.getTransfer(a.emissiveMap.colorSpace)===h,premultipliedAlpha:a.premultipliedAlpha,doubleSided:2===a.side,flipSided:1===a.side,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:ev&&!0===a.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ev&&!0===a.extensions.multiDraw||O)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:a.customProgramCacheKey()};return eM.vertexUv1s=c.has(1),eM.vertexUv2s=c.has(2),eM.vertexUv3s=c.has(3),c.clear(),eM},getProgramCacheKey:function(t){var i,r,a,n;let o=[];if(t.shaderID?o.push(t.shaderID):(o.push(t.customVertexShaderID),o.push(t.customFragmentShaderID)),void 0!==t.defines)for(let e in t.defines)o.push(e),o.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(i=o,r=t,i.push(r.precision),i.push(r.outputColorSpace),i.push(r.envMapMode),i.push(r.envMapCubeUVHeight),i.push(r.mapUv),i.push(r.alphaMapUv),i.push(r.lightMapUv),i.push(r.aoMapUv),i.push(r.bumpMapUv),i.push(r.normalMapUv),i.push(r.displacementMapUv),i.push(r.emissiveMapUv),i.push(r.metalnessMapUv),i.push(r.roughnessMapUv),i.push(r.anisotropyMapUv),i.push(r.clearcoatMapUv),i.push(r.clearcoatNormalMapUv),i.push(r.clearcoatRoughnessMapUv),i.push(r.iridescenceMapUv),i.push(r.iridescenceThicknessMapUv),i.push(r.sheenColorMapUv),i.push(r.sheenRoughnessMapUv),i.push(r.specularMapUv),i.push(r.specularColorMapUv),i.push(r.specularIntensityMapUv),i.push(r.transmissionMapUv),i.push(r.thicknessMapUv),i.push(r.combine),i.push(r.fogExp2),i.push(r.sizeAttenuation),i.push(r.morphTargetsCount),i.push(r.morphAttributeCount),i.push(r.numDirLights),i.push(r.numPointLights),i.push(r.numSpotLights),i.push(r.numSpotLightMaps),i.push(r.numHemiLights),i.push(r.numRectAreaLights),i.push(r.numDirLightShadows),i.push(r.numPointLightShadows),i.push(r.numSpotLightShadows),i.push(r.numSpotLightShadowsWithMaps),i.push(r.numLightProbes),i.push(r.shadowMapType),i.push(r.toneMapping),i.push(r.numClippingPlanes),i.push(r.numClipIntersection),i.push(r.depthPacking),a=o,n=t,s.disableAll(),n.instancing&&s.enable(0),n.instancingColor&&s.enable(1),n.instancingMorph&&s.enable(2),n.matcap&&s.enable(3),n.envMap&&s.enable(4),n.normalMapObjectSpace&&s.enable(5),n.normalMapTangentSpace&&s.enable(6),n.clearcoat&&s.enable(7),n.iridescence&&s.enable(8),n.alphaTest&&s.enable(9),n.vertexColors&&s.enable(10),n.vertexAlphas&&s.enable(11),n.vertexUv1s&&s.enable(12),n.vertexUv2s&&s.enable(13),n.vertexUv3s&&s.enable(14),n.vertexTangents&&s.enable(15),n.anisotropy&&s.enable(16),n.alphaHash&&s.enable(17),n.batching&&s.enable(18),n.dispersion&&s.enable(19),n.batchingColor&&s.enable(20),n.gradientMap&&s.enable(21),a.push(s.mask),s.disableAll(),n.fog&&s.enable(0),n.useFog&&s.enable(1),n.flatShading&&s.enable(2),n.logarithmicDepthBuffer&&s.enable(3),n.reversedDepthBuffer&&s.enable(4),n.skinning&&s.enable(5),n.morphTargets&&s.enable(6),n.morphNormals&&s.enable(7),n.morphColors&&s.enable(8),n.premultipliedAlpha&&s.enable(9),n.shadowMapEnabled&&s.enable(10),n.doubleSided&&s.enable(11),n.flipSided&&s.enable(12),n.useDepthPacking&&s.enable(13),n.dithering&&s.enable(14),n.transmission&&s.enable(15),n.sheen&&s.enable(16),n.opaque&&s.enable(17),n.pointsUvs&&s.enable(18),n.decodeVideoTexture&&s.enable(19),n.decodeVideoTextureEmissive&&s.enable(20),n.alphaToCoverage&&s.enable(21),a.push(s.mask),o.push(e.outputColorSpace)),o.push(t.customProgramCacheKey),o.join()},getUniforms:function(e){let t,i=g[e.type];if(i){let e=ij[i];t=t7.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,i){let r=d.get(i);return void 0!==r?++r.usedTimes:(r=new aP(e,i,t,a),u.push(r),d.set(i,r)),r},releaseProgram:function(e){if(0==--e.usedTimes){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}},releaseShaderCache:function(e){l.remove(e)},programs:u,dispose:function(){l.dispose()}}}function aN(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let i=e.get(t);return void 0===i&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,r){e.get(t)[i]=r},dispose:function(){e=new WeakMap}}}function aO(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function aF(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function aB(){let e=[],t=0,i=[],r=[],a=[];function n(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(i,r,a,s,o,l){let h=e[t];return void 0===h?(h={id:i.id,object:i,geometry:r,material:a,materialVariant:n(i),groupOrder:s,renderOrder:i.renderOrder,z:o,group:l},e[t]=h):(h.id=i.id,h.object=i,h.geometry=r,h.material=a,h.materialVariant=n(i),h.groupOrder=s,h.renderOrder=i.renderOrder,h.z=o,h.group=l),t++,h}return{opaque:i,transmissive:r,transparent:a,init:function(){t=0,i.length=0,r.length=0,a.length=0},push:function(e,t,n,o,l,h){let c=s(e,t,n,o,l,h);n.transmission>0?r.push(c):!0===n.transparent?a.push(c):i.push(c)},unshift:function(e,t,n,o,l,h){let c=s(e,t,n,o,l,h);n.transmission>0?r.unshift(c):!0===n.transparent?a.unshift(c):i.unshift(c)},finish:function(){for(let i=t,r=e.length;i<r;i++){let t=e[i];if(null===t.id)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){i.length>1&&i.sort(e||aO),r.length>1&&r.sort(t||aF),a.length>1&&a.sort(t||aF)}}}function aH(){let e=new WeakMap;return{get:function(t,i){let r,a=e.get(t);return void 0===a?(r=new aB,e.set(t,[r])):i>=a.length?(r=new aB,a.push(r)):r=a[i],r},dispose:function(){e=new WeakMap}}}function az(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":i={direction:new P,color:new eU};break;case"SpotLight":i={position:new P,direction:new P,color:new eU,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new eU,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new eU,groundColor:new eU};break;case"RectAreaLight":i={color:new eU,position:new P,halfWidth:new P,halfHeight:new P}}return e[t.id]=i,i}}}let aG=0;function aV(e,t){return 2*!!t.castShadow-2*!!e.castShadow+ +!!t.map-!!e.map}function ak(e){let t=new az,i=function(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new P);let a=new P,n=new J,s=new J;return{setup:function(a){let n=0,s=0,o=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let l=0,h=0,c=0,u=0,d=0,p=0,f=0,m=0,g=0,_=0,v=0;a.sort(aV);for(let e=0,x=a.length;e<x;e++){let x=a[e],M=x.color,S=x.intensity,E=x.distance,T=null;if(x.shadow&&x.shadow.map&&(T=1030===x.shadow.map.texture.format?x.shadow.map.texture:x.shadow.map.depthTexture||x.shadow.map.texture),x.isAmbientLight)n+=M.r*S,s+=M.g*S,o+=M.b*S;else if(x.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(x.sh.coefficients[e],S);v++}else if(x.isDirectionalLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){let e=x.shadow,t=i.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[l]=t,r.directionalShadowMap[l]=T,r.directionalShadowMatrix[l]=x.shadow.matrix,p++}r.directional[l]=e,l++}else if(x.isSpotLight){let e=t.get(x);e.position.setFromMatrixPosition(x.matrixWorld),e.color.copy(M).multiplyScalar(S),e.distance=E,e.coneCos=Math.cos(x.angle),e.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),e.decay=x.decay,r.spot[c]=e;let a=x.shadow;if(x.map&&(r.spotLightMap[g]=x.map,g++,a.updateMatrices(x),x.castShadow&&_++),r.spotLightMatrix[c]=a.matrix,x.castShadow){let e=i.get(x);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,r.spotShadow[c]=e,r.spotShadowMap[c]=T,m++}c++}else if(x.isRectAreaLight){let e=t.get(x);e.color.copy(M).multiplyScalar(S),e.halfWidth.set(.5*x.width,0,0),e.halfHeight.set(0,.5*x.height,0),r.rectArea[u]=e,u++}else if(x.isPointLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),e.distance=x.distance,e.decay=x.decay,x.castShadow){let e=x.shadow,t=i.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[h]=t,r.pointShadowMap[h]=T,r.pointShadowMatrix[h]=x.shadow.matrix,f++}r.point[h]=e,h++}else if(x.isHemisphereLight){let e=t.get(x);e.skyColor.copy(x.color).multiplyScalar(S),e.groundColor.copy(x.groundColor).multiplyScalar(S),r.hemi[d]=e,d++}}u>0&&(!0===e.has("OES_texture_float_linear")?(r.rectAreaLTC1=iX.LTC_FLOAT_1,r.rectAreaLTC2=iX.LTC_FLOAT_2):(r.rectAreaLTC1=iX.LTC_HALF_1,r.rectAreaLTC2=iX.LTC_HALF_2)),r.ambient[0]=n,r.ambient[1]=s,r.ambient[2]=o;let x=r.hash;(x.directionalLength!==l||x.pointLength!==h||x.spotLength!==c||x.rectAreaLength!==u||x.hemiLength!==d||x.numDirectionalShadows!==p||x.numPointShadows!==f||x.numSpotShadows!==m||x.numSpotMaps!==g||x.numLightProbes!==v)&&(r.directional.length=l,r.spot.length=c,r.rectArea.length=u,r.point.length=h,r.hemi.length=d,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=f,r.pointShadowMap.length=f,r.spotShadow.length=m,r.spotShadowMap.length=m,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=f,r.spotLightMatrix.length=m+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,x.directionalLength=l,x.pointLength=h,x.spotLength=c,x.rectAreaLength=u,x.hemiLength=d,x.numDirectionalShadows=p,x.numPointShadows=f,x.numSpotShadows=m,x.numSpotMaps=g,x.numLightProbes=v,r.version=aG++)},setupView:function(e,t){let i=0,o=0,l=0,h=0,c=0,u=t.matrixWorldInverse;for(let t=0,d=e.length;t<d;t++){let d=e[t];if(d.isDirectionalLight){let e=r.directional[i];e.direction.setFromMatrixPosition(d.matrixWorld),a.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(u),i++}else if(d.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),e.direction.setFromMatrixPosition(d.matrixWorld),a.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(u),l++}else if(d.isRectAreaLight){let e=r.rectArea[h];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),s.identity(),n.copy(d.matrixWorld),n.premultiply(u),s.extractRotation(n),e.halfWidth.set(.5*d.width,0,0),e.halfHeight.set(0,.5*d.height,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),h++}else if(d.isPointLight){let e=r.point[o];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),o++}else if(d.isHemisphereLight){let e=r.hemi[c];e.direction.setFromMatrixPosition(d.matrixWorld),e.direction.transformDirection(u),c++}}},state:r}}function aW(e){let t=new ak(e),i=[],r=[],a={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:function(e){a.camera=e,i.length=0,r.length=0},state:a,setupLights:function(){t.setup(i)},setupLightsView:function(e){t.setupView(i,e)},pushLight:function(e){i.push(e)},pushShadow:function(e){r.push(e)}}}function aX(e){let t=new WeakMap;return{get:function(i,r=0){let a,n=t.get(i);return void 0===n?(a=new aW(e),t.set(i,[a])):r>=n.length?(a=new aW(e),n.push(a)):a=n[r],a},dispose:function(){t=new WeakMap}}}let aj=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aY=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aq=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],aK=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],aZ=new J,aQ=new P,aJ=new P;function a$(e,t,i){let r=new tJ,a=new R,n=new R,s=new Y,o=new is,l=new io,h={},c=i.maxTextureSize,u={0:1,1:0,2:2},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:aj,fragmentShader:aY}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new tx;f.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tV(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;function x(t,i,r,a){let n=null,s=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==s)n=s;else if(n=!0===r.isPointLight?l:o,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0||!0===i.alphaToCoverage){let e=n.uuid,t=i.uuid,r=h[e];void 0===r&&(r={},h[e]=r);let a=r[t];void 0===a&&(a=n.clone(),r[t]=a,i.addEventListener("dispose",M)),n=a}return n.visible=i.visible,n.wireframe=i.wireframe,3===a?n.side=null!==i.shadowSide?i.shadowSide:i.side:n.side=null!==i.shadowSide?i.shadowSide:u[i.side],n.alphaMap=i.alphaMap,n.alphaTest=!0===i.alphaToCoverage?.5:i.alphaTest,n.map=i.map,n.clipShadows=i.clipShadows,n.clippingPlanes=i.clippingPlanes,n.clipIntersection=i.clipIntersection,n.displacementMap=i.displacementMap,n.displacementScale=i.displacementScale,n.displacementBias=i.displacementBias,n.wireframeLinewidth=i.wireframeLinewidth,n.linewidth=i.linewidth,!0===r.isPointLight&&!0===n.isMeshDistanceMaterial&&(e.properties.get(n).light=r),n}function M(e){for(let t in e.target.removeEventListener("dispose",M),h){let i=h[t],r=e.target.uuid;r in i&&(i[r].dispose(),delete i[r])}}this.render=function(i,o,l){if(!1===_.enabled||!1===_.autoUpdate&&!1===_.needsUpdate||0===i.length)return;2===this.type&&(m("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);let h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),M=e.state;M.setBlending(0),!0===M.buffers.depth.getReversed()?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let S=v!==this.type;S&&o.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let h=0,u=i.length;h<u;h++){let u=i[h],f=u.shadow;if(void 0===f){m("WebGLShadowMap:",u,"has no shadow.");continue}if(!1===f.autoUpdate&&!1===f.needsUpdate)continue;a.copy(f.mapSize);let _=f.getFrameExtents();a.multiply(_),n.copy(f.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/_.x),a.x=n.x*_.x,f.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/_.y),a.y=n.y*_.y,f.mapSize.y=n.y));let v=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=v,null===f.map||!0===S){if(null!==f.map&&(null!==f.map.depthTexture&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),3===this.type){if(u.isPointLight){m("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}f.map=new K(a.x,a.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),f.map.texture.name=u.name+".shadowMap",f.map.depthTexture=new t1(a.x,a.y,1015),f.map.depthTexture.name=u.name+".shadowMapDepth",f.map.depthTexture.format=1026,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=1003,f.map.depthTexture.magFilter=1003}else u.isPointLight?(f.map=new rn(a.x),f.map.depthTexture=new t3(a.x,1014)):(f.map=new K(a.x,a.y),f.map.depthTexture=new t1(a.x,a.y,1014)),f.map.depthTexture.name=u.name+".shadowMap",f.map.depthTexture.format=1026,1===this.type?(f.map.depthTexture.compareFunction=v?518:515,f.map.depthTexture.minFilter=1006,f.map.depthTexture.magFilter=1006):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=1003,f.map.depthTexture.magFilter=1003);f.camera.updateProjectionMatrix()}let E=f.map.isWebGLCubeRenderTarget?6:1;for(let i=0;i<E;i++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,i),e.clear();else{0===i&&(e.setRenderTarget(f.map),e.clear());let t=f.getViewport(i);s.set(n.x*t.x,n.y*t.y,n.x*t.z,n.y*t.w),M.viewport(s)}if(u.isPointLight){let e=f.camera,t=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),aQ.setFromMatrixPosition(u.matrixWorld),e.position.copy(aQ),aJ.copy(e.position),aJ.add(aq[i]),e.up.copy(aK[i]),e.lookAt(aJ),e.updateMatrixWorld(),t.makeTranslation(-aQ.x,-aQ.y,-aQ.z),aZ.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(aZ,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);r=f.getFrustum(),function i(a,n,s,o,l){if(!1===a.visible)return;if(a.layers.test(n.layers)&&(a.isMesh||a.isLine||a.isPoints)&&(a.castShadow||a.receiveShadow&&3===l)&&(!a.frustumCulled||r.intersectsObject(a))){a.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,a.matrixWorld);let i=t.update(a),r=a.material;if(Array.isArray(r)){let t=i.groups;for(let h=0,c=t.length;h<c;h++){let c=t[h],u=r[c.materialIndex];if(u&&u.visible){let t=x(a,u,o,l);a.onBeforeShadow(e,a,n,s,i,t,c),e.renderBufferDirect(s,null,i,t,a,c),a.onAfterShadow(e,a,n,s,i,t,c)}}}else if(r.visible){let t=x(a,r,o,l);a.onBeforeShadow(e,a,n,s,i,t,null),e.renderBufferDirect(s,null,i,t,a,null),a.onAfterShadow(e,a,n,s,i,t,null)}}let h=a.children;for(let e=0,t=h.length;e<t;e++)i(h[e],n,s,o,l)}(o,l,f.camera,u,this.type)}!0!==f.isPointLightShadow&&3===this.type&&function(i,r){let n=t.update(g);d.defines.VSM_SAMPLES!==i.blurSamples&&(d.defines.VSM_SAMPLES=i.blurSamples,p.defines.VSM_SAMPLES=i.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new K(a.x,a.y,{format:1030,type:1016})),d.uniforms.shadow_pass.value=i.map.depthTexture,d.uniforms.resolution.value=i.mapSize,d.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(r,null,n,d,g,null),p.uniforms.shadow_pass.value=i.mapPass.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(r,null,n,p,g,null)}(f,l),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(h,u,f)}}function a0(e,t){let i=new function(){let t=!1,i=new Y,r=null,a=new Y(0,0,0,0);return{setMask:function(i){r===i||t||(e.colorMask(i,i,i,i),r=i)},setLocked:function(e){t=e},setClear:function(t,r,n,s,o){!0===o&&(t*=s,r*=s,n*=s),i.set(t,r,n,s),!1===a.equals(i)&&(e.clearColor(t,r,n,s),a.copy(i))},reset:function(){t=!1,r=null,a.set(-1,0,0,0)}}},r=new function(){let i=!1,r=!1,a=null,n=null,s=null;return{setReversed:function(e){if(r!==e){let i=t.get("EXT_clip_control");e?i.clipControlEXT(i.LOWER_LEFT_EXT,i.ZERO_TO_ONE_EXT):i.clipControlEXT(i.LOWER_LEFT_EXT,i.NEGATIVE_ONE_TO_ONE_EXT),r=e;let a=s;s=null,this.setClear(a)}},getReversed:function(){return r},setTest:function(t){t?G(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){a===t||i||(e.depthMask(t),a=t)},setFunc:function(t){if(r&&(t=v[t]),n!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}n=t}},setLocked:function(e){i=e},setClear:function(t){s!==t&&(s=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){i=!1,a=null,n=null,s=null,r=!1}}},a=new function(){let t=!1,i=null,r=null,a=null,n=null,s=null,o=null,l=null,h=null;return{setTest:function(i){t||(i?G(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){i===r||t||(e.stencilMask(r),i=r)},setFunc:function(t,i,s){(r!==t||a!==i||n!==s)&&(e.stencilFunc(t,i,s),r=t,a=i,n=s)},setOp:function(t,i,r){(s!==t||o!==i||l!==r)&&(e.stencilOp(t,i,r),s=t,o=i,l=r)},setLocked:function(e){t=e},setClear:function(t){h!==t&&(e.clearStencil(t),h=t)},reset:function(){t=!1,i=null,r=null,a=null,n=null,s=null,o=null,l=null,h=null}}},n=new WeakMap,s=new WeakMap,o={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,f=null,m=null,_=null,x=null,M=null,S=null,E=new eU(0,0,0),T=0,y=!1,b=null,A=null,w=null,R=null,C=null,P=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,L=e.getParameter(e.VERSION);-1!==L.indexOf("WebGL")?D=parseFloat(/^WebGL (\d)/.exec(L)[1])>=1:-1!==L.indexOf("OpenGL ES")&&(D=parseFloat(/^OpenGL ES (\d)/.exec(L)[1])>=2);let U=null,I={},N=e.getParameter(e.SCISSOR_BOX),O=e.getParameter(e.VIEWPORT),F=new Y().fromArray(N),B=new Y().fromArray(O);function H(t,i,r,a){let n=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<r;s++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(i,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,n):e.texImage2D(i+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,n);return s}let z={};function G(t){!0!==o[t]&&(e.enable(t),o[t]=!0)}function V(t){!1!==o[t]&&(e.disable(t),o[t]=!1)}z[e.TEXTURE_2D]=H(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=H(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=H(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=H(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),G(e.DEPTH_TEST),r.setFunc(3),j(!1),q(1),G(e.CULL_FACE),X(0);let k={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};k[103]=e.MIN,k[104]=e.MAX;let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function X(t,i,r,a,n,s,o,l,h,c){if(0===t){!0===d&&(V(e.BLEND),d=!1);return}if(!1===d&&(G(e.BLEND),d=!0),5!==t){if(t!==p||c!==y){if((100!==f||100!==x)&&(e.blendEquation(e.FUNC_ADD),f=100,x=100),c)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:g("WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:g("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:g("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:g("WebGLState: Invalid blending: ",t)}m=null,_=null,M=null,S=null,E.set(0,0,0),T=0,p=t,y=c}return}n=n||i,s=s||r,o=o||a,(i!==f||n!==x)&&(e.blendEquationSeparate(k[i],k[n]),f=i,x=n),(r!==m||a!==_||s!==M||o!==S)&&(e.blendFuncSeparate(W[r],W[a],W[s],W[o]),m=r,_=a,M=s,S=o),(!1===l.equals(E)||h!==T)&&(e.blendColor(l.r,l.g,l.b,h),E.copy(l),T=h),p=t,y=!1}function j(t){b!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),b=t)}function q(t){0!==t?(G(e.CULL_FACE),t!==A&&(1===t?e.cullFace(e.BACK):2===t?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):V(e.CULL_FACE),A=t}function K(t,i,a){t?(G(e.POLYGON_OFFSET_FILL),(R!==i||C!==a)&&(R=i,C=a,r.getReversed()&&(i=-i),e.polygonOffset(i,a))):V(e.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:r,stencil:a},enable:G,disable:V,bindFramebuffer:function(t,i){return l[t]!==i&&(e.bindFramebuffer(t,i),l[t]=i,t===e.DRAW_FRAMEBUFFER&&(l[e.FRAMEBUFFER]=i),t===e.FRAMEBUFFER&&(l[e.DRAW_FRAMEBUFFER]=i),!0)},drawBuffers:function(t,i){let r=c,a=!1;if(t){void 0===(r=h.get(i))&&(r=[],h.set(i,r));let n=t.textures;if(r.length!==n.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,i=n.length;t<i;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=n.length,a=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,a=!0);a&&e.drawBuffers(r)},useProgram:function(t){return u!==t&&(e.useProgram(t),u=t,!0)},setBlending:X,setMaterial:function(t,n){2===t.side?V(e.CULL_FACE):G(e.CULL_FACE);let s=1===t.side;n&&(s=!s),j(s),1===t.blending&&!1===t.transparent?X(0):X(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),r.setFunc(t.depthFunc),r.setTest(t.depthTest),r.setMask(t.depthWrite),i.setMask(t.colorWrite);let o=t.stencilWrite;a.setTest(o),o&&(a.setMask(t.stencilWriteMask),a.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),a.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),K(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?G(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:j,setCullFace:q,setLineWidth:function(t){t!==w&&(D&&e.lineWidth(t),w=t)},setPolygonOffset:K,setScissorTest:function(t){t?G(e.SCISSOR_TEST):V(e.SCISSOR_TEST)},activeTexture:function(t){void 0===t&&(t=e.TEXTURE0+P-1),U!==t&&(e.activeTexture(t),U=t)},bindTexture:function(t,i,r){void 0===r&&(r=null===U?e.TEXTURE0+P-1:U);let a=I[r];void 0===a&&(a={type:void 0,texture:void 0},I[r]=a),(a.type!==t||a.texture!==i)&&(U!==r&&(e.activeTexture(r),U=r),e.bindTexture(t,i||z[t]),a.type=t,a.texture=i)},unbindTexture:function(){let t=I[U];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch(e){g("WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch(e){g("WebGLState:",e)}},texImage2D:function(){try{e.texImage2D(...arguments)}catch(e){g("WebGLState:",e)}},texImage3D:function(){try{e.texImage3D(...arguments)}catch(e){g("WebGLState:",e)}},updateUBOMapping:function(t,i){let r=s.get(i);void 0===r&&(r=new WeakMap,s.set(i,r));let a=r.get(t);void 0===a&&(a=e.getUniformBlockIndex(i,t.name),r.set(t,a))},uniformBlockBinding:function(t,i){let r=s.get(i).get(t);n.get(i)!==r&&(e.uniformBlockBinding(i,r,t.__bindingPointIndex),n.set(i,r))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch(e){g("WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch(e){g("WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch(e){g("WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch(e){g("WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch(e){g("WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch(e){g("WebGLState:",e)}},scissor:function(t){!1===F.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),F.copy(t))},viewport:function(t){!1===B.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),B.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(0xffffffff),e.stencilFunc(e.ALWAYS,0,0xffffffff),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),o={},U=null,I={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,f=null,m=null,_=null,x=null,M=null,S=null,E=new eU(0,0,0),T=0,y=!1,b=null,A=null,w=null,R=null,C=null,F.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),i.reset(),r.reset(),a.reset()}}}function a1(e,t,i,r,a,n,s){let c,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=!(typeof navigator>"u")&&/OculusBrowser/g.test(navigator.userAgent),f=new R,_=new WeakMap,v=new WeakMap,x=!1;try{x="u">typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch{}function M(e,t){return x?new OffscreenCanvas(e,t):u("canvas")}function S(e,t,i){let r=1,a=Z(e);if((a.width>i||a.height>i)&&(r=i/Math.max(a.width,a.height)),r<1)if(!("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap||"u">typeof VideoFrame&&e instanceof VideoFrame))return"data"in e&&m("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+")."),e;else{let i=Math.floor(r*a.width),n=Math.floor(r*a.height);void 0===c&&(c=M(i,n));let s=t?M(i,n):c;return s.width=i,s.height=n,s.getContext("2d").drawImage(e,0,0,i,n),m("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+i+"x"+n+")."),s}return e}function E(e){return e.generateMipmaps}function T(t){e.generateMipmap(t)}function y(i,r,a,n,s=!1){if(null!==i){if(void 0!==e[i])return e[i];m("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let o=r;if(r===e.RED&&(a===e.FLOAT&&(o=e.R32F),a===e.HALF_FLOAT&&(o=e.R16F),a===e.UNSIGNED_BYTE&&(o=e.R8)),r===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(o=e.R8UI),a===e.UNSIGNED_SHORT&&(o=e.R16UI),a===e.UNSIGNED_INT&&(o=e.R32UI),a===e.BYTE&&(o=e.R8I),a===e.SHORT&&(o=e.R16I),a===e.INT&&(o=e.R32I)),r===e.RG&&(a===e.FLOAT&&(o=e.RG32F),a===e.HALF_FLOAT&&(o=e.RG16F),a===e.UNSIGNED_BYTE&&(o=e.RG8)),r===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(o=e.RG8UI),a===e.UNSIGNED_SHORT&&(o=e.RG16UI),a===e.UNSIGNED_INT&&(o=e.RG32UI),a===e.BYTE&&(o=e.RG8I),a===e.SHORT&&(o=e.RG16I),a===e.INT&&(o=e.RG32I)),r===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(o=e.RGB8UI),a===e.UNSIGNED_SHORT&&(o=e.RGB16UI),a===e.UNSIGNED_INT&&(o=e.RGB32UI),a===e.BYTE&&(o=e.RGB8I),a===e.SHORT&&(o=e.RGB16I),a===e.INT&&(o=e.RGB32I)),r===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(o=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(o=e.RGBA16UI),a===e.UNSIGNED_INT&&(o=e.RGBA32UI),a===e.BYTE&&(o=e.RGBA8I),a===e.SHORT&&(o=e.RGBA16I),a===e.INT&&(o=e.RGBA32I)),r===e.RGB&&(a===e.UNSIGNED_INT_5_9_9_9_REV&&(o=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(o=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?l:F.getTransfer(n);a===e.FLOAT&&(o=e.RGBA32F),a===e.HALF_FLOAT&&(o=e.RGBA16F),a===e.UNSIGNED_BYTE&&(o=t===h?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT_4_4_4_4&&(o=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(o=e.RGB5_A1)}return(o===e.R16F||o===e.R32F||o===e.RG16F||o===e.RG32F||o===e.RGBA16F||o===e.RGBA32F)&&t.get("EXT_color_buffer_float"),o}function b(t,i){let r;return t?null===i||1014===i||1020===i?r=e.DEPTH24_STENCIL8:1015===i?r=e.DEPTH32F_STENCIL8:1012===i&&(r=e.DEPTH24_STENCIL8,m("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):null===i||1014===i||1020===i?r=e.DEPTH_COMPONENT24:1015===i?r=e.DEPTH_COMPONENT32F:1012===i&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return!0===E(e)||e.isFramebufferTexture&&1003!==e.minFilter&&1006!==e.minFilter?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener("dispose",w),function(e){let t=r.get(e);if(void 0===t.__webglInit)return;let i=e.source,a=v.get(i);if(a){let r=a[t.__cacheKey];r.usedTimes--,0===r.usedTimes&&P(e),0===Object.keys(a).length&&v.delete(i)}r.remove(e)}(t),t.isVideoTexture&&_.delete(t)}function C(t){let i=t.target;i.removeEventListener("dispose",C),function(t){let i=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(i.__webglFramebuffer[t]))for(let r=0;r<i.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(i.__webglFramebuffer[t][r]);else e.deleteFramebuffer(i.__webglFramebuffer[t]);i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t])}else{if(Array.isArray(i.__webglFramebuffer))for(let t=0;t<i.__webglFramebuffer.length;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer);if(i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(let t=0;t<i.__webglColorRenderbuffer.length;t++)i.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,i=a.length;t<i;t++){let i=r.get(a[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),s.memory.textures--),r.remove(a[t])}r.remove(t)}(i)}function P(t){let i=r.get(t);e.deleteTexture(i.__webglTexture);let a=t.source,n=v.get(a);delete n[i.__cacheKey],s.memory.textures--}let D=0;function L(t,a){let n=r.get(t);if(t.isVideoTexture&&function(e){let t=s.render.frame;_.get(e)!==t&&(_.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&!0!==t.isExternalTexture&&t.version>0&&n.__version!==t.version){let e=t.image;if(null===e)m("WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==e.complete)return void z(n,t,a);m("WebGLRenderer: Texture marked for update but image is incomplete")}}else t.isExternalTexture&&(n.__webglTexture=t.sourceTexture?t.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,n.__webglTexture,e.TEXTURE0+a)}let U={1e3:e.REPEAT,1001:e.CLAMP_TO_EDGE,1002:e.MIRRORED_REPEAT},I={1003:e.NEAREST,1004:e.NEAREST_MIPMAP_NEAREST,1005:e.NEAREST_MIPMAP_LINEAR,1006:e.LINEAR,1007:e.LINEAR_MIPMAP_NEAREST,1008:e.LINEAR_MIPMAP_LINEAR},N={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function O(i,n){if(1015===n.type&&!1===t.has("OES_texture_float_linear")&&(1006===n.magFilter||1007===n.magFilter||1005===n.magFilter||1008===n.magFilter||1006===n.minFilter||1007===n.minFilter||1005===n.minFilter||1008===n.minFilter)&&m("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(i,e.TEXTURE_WRAP_S,U[n.wrapS]),e.texParameteri(i,e.TEXTURE_WRAP_T,U[n.wrapT]),(i===e.TEXTURE_3D||i===e.TEXTURE_2D_ARRAY)&&e.texParameteri(i,e.TEXTURE_WRAP_R,U[n.wrapR]),e.texParameteri(i,e.TEXTURE_MAG_FILTER,I[n.magFilter]),e.texParameteri(i,e.TEXTURE_MIN_FILTER,I[n.minFilter]),n.compareFunction&&(e.texParameteri(i,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(i,e.TEXTURE_COMPARE_FUNC,N[n.compareFunction])),!0===t.has("EXT_texture_filter_anisotropic")&&1003!==n.magFilter&&(1005===n.minFilter||1008===n.minFilter)&&(1015!==n.type||!1!==t.has("OES_texture_float_linear"))&&(n.anisotropy>1||r.get(n).__currentAnisotropy)){let s=t.get("EXT_texture_filter_anisotropic");e.texParameterf(i,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,a.getMaxAnisotropy())),r.get(n).__currentAnisotropy=n.anisotropy}}function B(t,i){let r=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",w));let a=i.source,n=v.get(a);void 0===n&&(n={},v.set(a,n));let o=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(i);if(o!==t.__cacheKey){void 0===n[o]&&(n[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),n[o].usedTimes++;let a=n[t.__cacheKey];void 0!==a&&(n[t.__cacheKey].usedTimes--,0===a.usedTimes&&P(i)),t.__cacheKey=o,t.__webglTexture=n[o].texture}return r}function H(e,t,i){return Math.floor(Math.floor(e/i)/t)}function z(t,s,o){let l=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(l=e.TEXTURE_3D);let h=B(t,s),c=s.source;i.bindTexture(l,t.__webglTexture,e.TEXTURE0+o);let u=r.get(c);if(c.version!==u.__version||!0===h){let t;i.activeTexture(e.TEXTURE0+o);let r=F.getPrimaries(F.workingColorSpace),d=""===s.colorSpace?null:F.getPrimaries(s.colorSpace),p=""===s.colorSpace||r===d?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let f=S(s.image,!1,a.maxTextureSize);f=K(s,f);let g=n.convert(s.format,s.colorSpace),_=n.convert(s.type),v=y(s.internalFormat,g,_,s.colorSpace,s.isVideoTexture);O(l,s);let x=s.mipmaps,M=!0!==s.isVideoTexture,w=void 0===u.__version||!0===h,R=c.dataReady,C=A(s,f);if(s.isDepthTexture)v=b(1027===s.format,s.type),w&&(M?i.texStorage2D(e.TEXTURE_2D,1,v,f.width,f.height):i.texImage2D(e.TEXTURE_2D,0,v,f.width,f.height,0,g,_,null));else if(s.isDataTexture)if(x.length>0){M&&w&&i.texStorage2D(e.TEXTURE_2D,C,v,x[0].width,x[0].height);for(let r=0,a=x.length;r<a;r++)t=x[r],M?R&&i.texSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,g,_,t.data):i.texImage2D(e.TEXTURE_2D,r,v,t.width,t.height,0,g,_,t.data);s.generateMipmaps=!1}else M?(w&&i.texStorage2D(e.TEXTURE_2D,C,v,f.width,f.height),R&&function(t,r,a,n){let s=t.updateRanges;if(0===s.length)i.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,a,n,r.data);else{s.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<s.length;e++){let t=s[o],i=s[e],a=t.start+t.count,n=H(i.start,r.width,4),l=H(t.start,r.width,4);i.start<=a+1&&n===l&&H(i.start+i.count-1,r.width,4)===n?t.count=Math.max(t.count,i.start+i.count-t.start):s[++o]=i}s.length=o+1;let l=e.getParameter(e.UNPACK_ROW_LENGTH),h=e.getParameter(e.UNPACK_SKIP_PIXELS),c=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,o=s.length;t<o;t++){let o=s[t],l=Math.floor(o.start/4),h=Math.ceil(o.count/4),c=l%r.width,u=Math.floor(l/r.width);e.pixelStorei(e.UNPACK_SKIP_PIXELS,c),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),i.texSubImage2D(e.TEXTURE_2D,0,c,u,h,1,a,n,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,l),e.pixelStorei(e.UNPACK_SKIP_PIXELS,h),e.pixelStorei(e.UNPACK_SKIP_ROWS,c)}}(s,f,g,_)):i.texImage2D(e.TEXTURE_2D,0,v,f.width,f.height,0,g,_,f.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){M&&w&&i.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,x[0].width,x[0].height,f.depth);for(let r=0,a=x.length;r<a;r++)if(t=x[r],1023!==s.format)if(null!==g)if(M){if(R)if(s.layerUpdates.size>0){let a=iG(t.width,t.height,s.format,s.type);for(let n of s.layerUpdates){let s=t.data.subarray(n*a/t.data.BYTES_PER_ELEMENT,(n+1)*a/t.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,n,t.width,t.height,1,g,s)}s.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,t.width,t.height,f.depth,g,t.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,v,t.width,t.height,f.depth,0,t.data,0,0);else m("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else M?R&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,t.width,t.height,f.depth,g,_,t.data):i.texImage3D(e.TEXTURE_2D_ARRAY,r,v,t.width,t.height,f.depth,0,g,_,t.data)}else{M&&w&&i.texStorage2D(e.TEXTURE_2D,C,v,x[0].width,x[0].height);for(let r=0,a=x.length;r<a;r++)t=x[r],1023!==s.format?null!==g?M?R&&i.compressedTexSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,g,t.data):i.compressedTexImage2D(e.TEXTURE_2D,r,v,t.width,t.height,0,t.data):m("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M?R&&i.texSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,g,_,t.data):i.texImage2D(e.TEXTURE_2D,r,v,t.width,t.height,0,g,_,t.data)}else if(s.isDataArrayTexture)if(M){if(w&&i.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,f.width,f.height,f.depth),R)if(s.layerUpdates.size>0){let t=iG(f.width,f.height,s.format,s.type);for(let r of s.layerUpdates){let a=f.data.subarray(r*t/f.data.BYTES_PER_ELEMENT,(r+1)*t/f.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,f.width,f.height,1,g,_,a)}s.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,f.width,f.height,f.depth,g,_,f.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,v,f.width,f.height,f.depth,0,g,_,f.data);else if(s.isData3DTexture)M?(w&&i.texStorage3D(e.TEXTURE_3D,C,v,f.width,f.height,f.depth),R&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,f.width,f.height,f.depth,g,_,f.data)):i.texImage3D(e.TEXTURE_3D,0,v,f.width,f.height,f.depth,0,g,_,f.data);else if(s.isFramebufferTexture){if(w)if(M)i.texStorage2D(e.TEXTURE_2D,C,v,f.width,f.height);else{let t=f.width,r=f.height;for(let a=0;a<C;a++)i.texImage2D(e.TEXTURE_2D,a,v,t,r,0,g,_,null),t>>=1,r>>=1}}else if(x.length>0){if(M&&w){let t=Z(x[0]);i.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height)}for(let r=0,a=x.length;r<a;r++)t=x[r],M?R&&i.texSubImage2D(e.TEXTURE_2D,r,0,0,g,_,t):i.texImage2D(e.TEXTURE_2D,r,v,g,_,t);s.generateMipmaps=!1}else if(M){if(w){let t=Z(f);i.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height)}R&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,g,_,f)}else i.texImage2D(e.TEXTURE_2D,0,v,g,_,f);E(s)&&T(l),u.__version=c.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function G(t,a,s,o,l,h){let c=n.convert(s.format,s.colorSpace),u=n.convert(s.type),p=y(s.internalFormat,c,u,s.colorSpace),f=r.get(a),m=r.get(s);if(m.__renderTarget=a,!f.__hasExternalTextures){let t=Math.max(1,a.width>>h),r=Math.max(1,a.height>>h);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?i.texImage3D(l,h,p,t,r,a.depth,0,c,u,null):i.texImage2D(l,h,p,t,r,0,c,u,null)}i.bindFramebuffer(e.FRAMEBUFFER,t),q(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,l,m.__webglTexture,0,Y(a)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,l,m.__webglTexture,h),i.bindFramebuffer(e.FRAMEBUFFER,null)}function V(t,i,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),i.depthBuffer){let a=i.depthTexture,n=a&&a.isDepthTexture?a.type:null,s=b(i.stencilBuffer,n),o=i.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;q(i)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Y(i),s,i.width,i.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Y(i),s,i.width,i.height):e.renderbufferStorage(e.RENDERBUFFER,s,i.width,i.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,o,e.RENDERBUFFER,t)}else{let t=i.textures;for(let a=0;a<t.length;a++){let s=t[a],o=n.convert(s.format,s.colorSpace),l=n.convert(s.type),h=y(s.internalFormat,o,l,s.colorSpace);q(i)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Y(i),h,i.width,i.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Y(i),h,i.width,i.height):e.renderbufferStorage(e.RENDERBUFFER,h,i.width,i.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function k(t,a,s){let o=!0===a.isWebGLCubeRenderTarget;if(i.bindFramebuffer(e.FRAMEBUFFER,t),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let l=r.get(a.depthTexture);if(l.__renderTarget=a,l.__webglTexture&&a.depthTexture.image.width===a.width&&a.depthTexture.image.height===a.height||(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),o){if(void 0===l.__webglInit&&(l.__webglInit=!0,a.depthTexture.addEventListener("dispose",w)),void 0===l.__webglTexture){let t;l.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),O(e.TEXTURE_CUBE_MAP,a.depthTexture);let r=n.convert(a.depthTexture.format),s=n.convert(a.depthTexture.type);1026===a.depthTexture.format?t=e.DEPTH_COMPONENT24:1027===a.depthTexture.format&&(t=e.DEPTH24_STENCIL8);for(let i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,t,a.width,a.height,0,r,s,null)}}else L(a.depthTexture,0);let h=l.__webglTexture,c=Y(a),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+s:e.TEXTURE_2D,p=1027===a.depthTexture.format?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(1026===a.depthTexture.format)q(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,u,h,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,p,u,h,0);else if(1027===a.depthTexture.format)q(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,u,h,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,p,u,h,0);else throw Error("Unknown depthTexture format")}function W(t){let a=r.get(t),n=!0===t.isWebGLCubeRenderTarget;if(a.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),e){let t=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),a.__depthDisposeCallback=t}a.__boundDepthTexture=e}if(t.depthTexture&&!a.__autoAllocateDepthBuffer)if(n)for(let e=0;e<6;e++)k(a.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?k(a.__webglFramebuffer[0],t,0):k(a.__webglFramebuffer,t,0)}else if(n){a.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(i.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[r]),void 0===a.__webglDepthbuffer[r])a.__webglDepthbuffer[r]=e.createRenderbuffer(),V(a.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=a.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,n)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?i.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),void 0===a.__webglDepthbuffer)a.__webglDepthbuffer=e.createRenderbuffer(),V(a.__webglDepthbuffer,t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,r)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}let X=[],j=[];function Y(e){return Math.min(a.maxSamples,e.samples)}function q(e){let i=r.get(e);return e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function K(e,t){let i=e.colorSpace,r=e.format,a=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||i!==o&&""!==i&&(F.getTransfer(i)===h?(1023!==r||1009!==a)&&m("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):g("WebGLTextures: Unsupported texture color space:",i)),t}function Z(e){return"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?(f.width=e.naturalWidth||e.width,f.height=e.naturalHeight||e.height):"u">typeof VideoFrame&&e instanceof VideoFrame?(f.width=e.displayWidth,f.height=e.displayHeight):(f.width=e.width,f.height=e.height),f}this.allocateTextureUnit=function(){let e=D;return e>=a.maxTextures&&m("WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+a.maxTextures),D+=1,e},this.resetTextureUnits=function(){D=0},this.setTexture2D=L,this.setTexture2DArray=function(t,a){let n=r.get(t);if(!1===t.isRenderTargetTexture&&t.version>0&&n.__version!==t.version)return void z(n,t,a);t.isExternalTexture&&(n.__webglTexture=t.sourceTexture?t.sourceTexture:null),i.bindTexture(e.TEXTURE_2D_ARRAY,n.__webglTexture,e.TEXTURE0+a)},this.setTexture3D=function(t,a){let n=r.get(t);if(!1===t.isRenderTargetTexture&&t.version>0&&n.__version!==t.version)return void z(n,t,a);i.bindTexture(e.TEXTURE_3D,n.__webglTexture,e.TEXTURE0+a)},this.setTextureCube=function(t,s){let o=r.get(t);if(!0!==t.isCubeDepthTexture&&t.version>0&&o.__version!==t.version)return void function(t,s,o){if(6!==s.image.length)return;let l=B(t,s),h=s.source;i.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let c=r.get(h);if(h.version!==c.__version||!0===l){let t;i.activeTexture(e.TEXTURE0+o);let r=F.getPrimaries(F.workingColorSpace),u=""===s.colorSpace?null:F.getPrimaries(s.colorSpace),d=""===s.colorSpace||r===u?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let p=s.isCompressedTexture||s.image[0].isCompressedTexture,f=s.image[0]&&s.image[0].isDataTexture,g=[];for(let e=0;e<6;e++)p||f?g[e]=f?s.image[e].image:s.image[e]:g[e]=S(s.image[e],!0,a.maxCubemapSize),g[e]=K(s,g[e]);let _=g[0],v=n.convert(s.format,s.colorSpace),x=n.convert(s.type),M=y(s.internalFormat,v,x,s.colorSpace),b=!0!==s.isVideoTexture,w=void 0===c.__version||!0===l,R=h.dataReady,C=A(s,_);if(O(e.TEXTURE_CUBE_MAP,s),p){b&&w&&i.texStorage2D(e.TEXTURE_CUBE_MAP,C,M,_.width,_.height);for(let r=0;r<6;r++){t=g[r].mipmaps;for(let a=0;a<t.length;a++){let n=t[a];1023!==s.format?null!==v?b?R&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,0,0,n.width,n.height,v,n.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,M,n.width,n.height,0,n.data):m("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?R&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,0,0,n.width,n.height,v,x,n.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,M,n.width,n.height,0,v,x,n.data)}}}else{if(t=s.mipmaps,b&&w){t.length>0&&C++;let r=Z(g[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,C,M,r.width,r.height)}for(let r=0;r<6;r++)if(f){b?R&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,g[r].width,g[r].height,v,x,g[r].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,M,g[r].width,g[r].height,0,v,x,g[r].data);for(let a=0;a<t.length;a++){let n=t[a].image[r].image;b?R&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,0,0,n.width,n.height,v,x,n.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,M,n.width,n.height,0,v,x,n.data)}}else{b?R&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,v,x,g[r]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,M,v,x,g[r]);for(let a=0;a<t.length;a++){let n=t[a];b?R&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,0,0,v,x,n.image[r]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,M,v,x,n.image[r])}}}E(s)&&T(e.TEXTURE_CUBE_MAP),c.__version=h.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}(o,t,s);i.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture,e.TEXTURE0+s)},this.rebindTextures=function(t,i,a){let n=r.get(t);void 0!==i&&G(n.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),void 0!==a&&W(t)},this.setupRenderTarget=function(t){let a=t.texture,o=r.get(t),l=r.get(a);t.addEventListener("dispose",C);let h=t.textures,c=!0===t.isWebGLCubeRenderTarget,u=h.length>1;if(u||(void 0===l.__webglTexture&&(l.__webglTexture=e.createTexture()),l.__version=a.version,s.memory.textures++),c){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(a.mipmaps&&a.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let i=0;i<a.mipmaps.length;i++)o.__webglFramebuffer[t][i]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<a.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(u)for(let t=0,i=h.length;t<i;t++){let i=r.get(h[t]);void 0===i.__webglTexture&&(i.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&!1===q(t)){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let i=0;i<h.length;i++){let r=h[i];o.__webglColorRenderbuffer[i]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[i]);let a=n.convert(r.format,r.colorSpace),s=n.convert(r.type),l=y(r.internalFormat,a,s,r.colorSpace,!0===t.isXRRenderTarget),c=Y(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,c,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+i,e.RENDERBUFFER,o.__webglColorRenderbuffer[i])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),V(o.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){i.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),O(e.TEXTURE_CUBE_MAP,a);for(let i=0;i<6;i++)if(a.mipmaps&&a.mipmaps.length>0)for(let r=0;r<a.mipmaps.length;r++)G(o.__webglFramebuffer[i][r],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,r);else G(o.__webglFramebuffer[i],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(a)&&T(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(u){for(let a=0,n=h.length;a<n;a++){let n=h[a],s=r.get(n),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(l,s.__webglTexture),O(l,n),G(o.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0+a,l,0),E(n)&&T(l)}i.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(r,l.__webglTexture),O(r,a),a.mipmaps&&a.mipmaps.length>0)for(let i=0;i<a.mipmaps.length;i++)G(o.__webglFramebuffer[i],t,a,e.COLOR_ATTACHMENT0,r,i);else G(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0,r,0);E(a)&&T(r),i.unbindTexture()}t.depthBuffer&&W(t)},this.updateRenderTargetMipmap=function(t){let a=t.textures;for(let n=0,s=a.length;n<s;n++){let s=a[n];if(E(s)){let a=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,n=r.get(s).__webglTexture;i.bindTexture(a,n),T(a),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(t.samples>0){if(!1===q(t)){let a=t.textures,n=t.width,s=t.height,o=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,h=r.get(t),c=a.length>1;if(c)for(let t=0;t<a.length;t++)i.bindFramebuffer(e.FRAMEBUFFER,h.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,h.__webglMultisampledFramebuffer);let u=t.texture.mipmaps;u&&u.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,h.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let i=0;i<a.length;i++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,h.__webglColorRenderbuffer[i]);let t=r.get(a[i]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,n,s,0,0,n,s,o,e.NEAREST),!0===p&&(X.length=0,j.length=0,X.push(e.COLOR_ATTACHMENT0+i),t.depthBuffer&&!1===t.resolveDepthBuffer&&(X.push(l),j.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,j)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,X))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<a.length;t++){i.bindFramebuffer(e.FRAMEBUFFER,h.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,h.__webglColorRenderbuffer[t]);let n=r.get(a[t]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,n,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,h.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&!1===t.resolveDepthBuffer&&p){let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[i])}}},this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=G,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a3(e,t){return{convert:function(i,r=""){let a,n=F.getTransfer(r);if(1009===i)return e.UNSIGNED_BYTE;if(1017===i)return e.UNSIGNED_SHORT_4_4_4_4;if(1018===i)return e.UNSIGNED_SHORT_5_5_5_1;if(35902===i)return e.UNSIGNED_INT_5_9_9_9_REV;if(35899===i)return e.UNSIGNED_INT_10F_11F_11F_REV;if(1010===i)return e.BYTE;if(1011===i)return e.SHORT;if(1012===i)return e.UNSIGNED_SHORT;if(1013===i)return e.INT;if(1014===i)return e.UNSIGNED_INT;if(1015===i)return e.FLOAT;if(1016===i)return e.HALF_FLOAT;if(1021===i)return e.ALPHA;if(1022===i)return e.RGB;if(1023===i)return e.RGBA;if(1026===i)return e.DEPTH_COMPONENT;if(1027===i)return e.DEPTH_STENCIL;if(1028===i)return e.RED;if(1029===i)return e.RED_INTEGER;if(1030===i)return e.RG;if(1031===i)return e.RG_INTEGER;if(1033===i)return e.RGBA_INTEGER;if(33776===i||33777===i||33778===i||33779===i)if(n===h)if(null===(a=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;else{if(33776===i)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(33777===i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(33778===i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(33779===i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(a=t.get("WEBGL_compressed_texture_s3tc")))return null;if(33776===i)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===i)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===i)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===i)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===i||35841===i||35842===i||35843===i)if(null===(a=t.get("WEBGL_compressed_texture_pvrtc")))return null;else{if(35840===i)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===i)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===i)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===i)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===i||37492===i||37496===i||37488===i||37489===i||37490===i||37491===i)if(null===(a=t.get("WEBGL_compressed_texture_etc")))return null;else{if(36196===i||37492===i)return n===h?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(37496===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(37488===i)return a.COMPRESSED_R11_EAC;if(37489===i)return a.COMPRESSED_SIGNED_R11_EAC;if(37490===i)return a.COMPRESSED_RG11_EAC;if(37491===i)return a.COMPRESSED_SIGNED_RG11_EAC}if(37808===i||37809===i||37810===i||37811===i||37812===i||37813===i||37814===i||37815===i||37816===i||37817===i||37818===i||37819===i||37820===i||37821===i)if(null===(a=t.get("WEBGL_compressed_texture_astc")))return null;else{if(37808===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(37809===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(37810===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(37811===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(37812===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(37813===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(37814===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(37815===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(37816===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(37817===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(37818===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(37819===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(37820===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(37821===i)return n===h?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(36492===i||36494===i||36495===i)if(null===(a=t.get("EXT_texture_compression_bptc")))return null;else{if(36492===i)return n===h?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(36494===i)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(36495===i)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(36283===i||36284===i||36285===i||36286===i)if(null===(a=t.get("EXT_texture_compression_rgtc")))return null;else{if(36283===i)return a.COMPRESSED_RED_RGTC1_EXT;if(36284===i)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(36285===i)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(36286===i)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return 1020===i?e.UNSIGNED_INT_24_8:void 0!==e[i]?e[i]:null}}}let a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(null===this.texture){let i=new t2(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(null!==this.texture&&null===this.mesh){let t=e.cameras[0].viewport,i=new ii({vertexShader:a2,fragmentShader:a4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tV(new t5(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a8 extends x{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,f="u">typeof XRWebGLBinding,g=new a5,_={},v=t.getContextAttributes(),x=null,M=null,S=[],T=[],y=new R,b=null,A=new iC;A.viewport=new Y;let w=new iC;w.viewport=new Y;let C=[A,w],D=new iN,L=null,U=null;function I(e){let t=T.indexOf(e.inputSource);if(-1===t)return;let i=S[t];void 0!==i&&(i.update(e.inputSource,e.frame,l||n),i.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let e=0;e<S.length;e++){let t=T[e];null!==t&&(T[e]=null,S[e].disconnect(t))}for(let e in L=null,U=null,g.reset(),_)delete _[e];e.setRenderTarget(x),d=null,u=null,c=null,r=null,M=null,G.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}function O(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],r=T.indexOf(i);r>=0&&(T[r]=null,S[r].disconnect(i))}for(let t=0;t<e.added.length;t++){let i=e.added[t],r=T.indexOf(i);if(-1===r){for(let e=0;e<S.length;e++)if(e>=T.length){T.push(i),r=e;break}else if(null===T[e]){T[e]=i,r=e;break}if(-1===r)break}let a=S[r];a&&a.connect(i)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return void 0===t&&(t=new eR,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return void 0===t&&(t=new eR,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return void 0===t&&(t=new eR,S[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){a=e,!0===i.isPresenting&&m("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){s=e,!0===i.isPresenting&&m("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return null===c&&f&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(h){if(null!==(r=h)){if(x=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),!0!==v.xrCompatible&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let i=null,n=null,s=null;v.depth&&(s=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,i=v.stencil?1027:1026,n=v.stencil?1020:1014);let o={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};u=(c=this.getBinding()).createProjectionLayer(o),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new K(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new t1(u.textureWidth,u.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:4*!!v.antialias,resolveDepthBuffer:!1===u.ignoreDepthValues,resolveStencilBuffer:!1===u.ignoreDepthValues})}else{let i={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,i),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new K(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:!1===d.ignoreDepthValues,resolveStencilBuffer:!1===d.ignoreDepthValues})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(null!==r)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let F=new P,B=new P;function H(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){var t,i,a;if(null===r)return;let n=e.near,s=e.far;null!==g.texture&&(g.depthNear>0&&(n=g.depthNear),g.depthFar>0&&(s=g.depthFar)),D.near=w.near=A.near=n,D.far=w.far=A.far=s,(L!==D.near||U!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,U=D.far),D.layers.mask=6|e.layers.mask,A.layers.mask=-5&D.layers.mask,w.layers.mask=-3&D.layers.mask;let o=e.parent,l=D.cameras;H(D,o);for(let e=0;e<l.length;e++)H(l[e],o);2===l.length?function(e,t,i){F.setFromMatrixPosition(t.matrixWorld),B.setFromMatrixPosition(i.matrixWorld);let r=F.distanceTo(B),a=t.projectionMatrix.elements,n=i.projectionMatrix.elements,s=a[14]/(a[10]-1),o=a[14]/(a[10]+1),l=(a[9]+1)/a[5],h=(a[9]-1)/a[5],c=(a[8]-1)/a[0],u=(n[8]+1)/n[0],d=r/(-c+u),p=-(d*c);if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(p),e.translateZ(d),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),-1===a[10])e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=s+d,i=o+d;e.projectionMatrix.makePerspective(s*c-p,s*u+(r-p),l*o/i*t,h*o/i*t,t,i),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}(D,A,w):D.projectionMatrix.copy(A.projectionMatrix),t=e,i=D,null===(a=o)?t.matrix.copy(i.matrixWorld):(t.matrix.copy(a.matrixWorld),t.matrix.invert(),t.matrix.multiply(i.matrixWorld)),t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0),t.projectionMatrix.copy(i.projectionMatrix),t.projectionMatrixInverse.copy(i.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=2*E*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1)},this.getCamera=function(){return D},this.getFoveation=function(){if(null!==u||null!==d)return o},this.setFoveation=function(e){o=e,null!==u&&(u.fixedFoveation=e),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=e)},this.hasDepthSensing=function(){return null!==g.texture},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(e){return _[e]};let z=null,G=new iV;G.setAnimationLoop(function(t,a){if(h=a.getViewerPose(l||n),p=a,null!==h){let t=h.views;null!==d&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let a=!1;t.length!==D.cameras.length&&(D.cameras.length=0,a=!0);for(let i=0;i<t.length;i++){let r=t[i],n=null;if(null!==d)n=d.getViewport(r);else{let t=c.getViewSubImage(u,r);n=t.viewport,0===i&&(e.setRenderTargetTextures(M,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(M))}let s=C[i];void 0===s&&((s=new iC).layers.enable(i),s.viewport=new Y,C[i]=s),s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(r.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(n.x,n.y,n.width,n.height),0===i&&(D.matrix.copy(s.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),!0===a&&D.cameras.push(s)}let n=r.enabledFeatures;if(n&&n.includes("depth-sensing")&&"gpu-optimized"==r.depthUsage&&f){let e=(c=i.getBinding()).getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(n&&n.includes("camera-access")&&f){e.state.unbindTexture(),c=i.getBinding();for(let e=0;e<t.length;e++){let i=t[e].camera;if(i){let e=_[i];e||(e=new t2,_[i]=e);let t=c.getCameraImage(i);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=T[e],i=S[e];null!==t&&void 0!==i&&i.update(t,a,l||n)}z&&z(t,a),a.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:a}),p=null}),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}}let a6=new el,a9=new J;function a7(e,t){function i(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function r(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,i(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,i(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,i(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,1===r.side&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,i(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),1===r.side&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,i(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,i(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,i(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let a=t.get(r),n=a.envMap,s=a.envMapRotation;n&&(e.envMap.value=n,a6.copy(s),a6.x*=-1,a6.y*=-1,a6.z*=-1,n.isCubeTexture&&!1===n.isRenderTargetTexture&&(a6.y*=-1,a6.z*=-1),e.envMapRotation.value.setFromMatrix4(a9.makeRotationFromEuler(a6)),e.flipEnvMap.value=n.isCubeTexture&&!1===n.isRenderTargetTexture?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,i(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,i(r.aoMap,e.aoMapTransform))}return{refreshFogUniforms:function(t,i){i.color.getRGB(t.fogColor.value,t9(e)),i.isFog?(t.fogNear.value=i.near,t.fogFar.value=i.far):i.isFogExp2&&(t.fogDensity.value=i.density)},refreshMaterialUniforms:function(e,a,n,s,o){var l,h,c,u,d,p,f,m,g,_,v,x,M,S,E,T,y,b,A,w,R;a.isMeshBasicMaterial?r(e,a):a.isMeshLambertMaterial?(r(e,a),a.envMap&&(e.envMapIntensity.value=a.envMapIntensity)):a.isMeshToonMaterial?(r(e,a),l=e,(h=a).gradientMap&&(l.gradientMap.value=h.gradientMap)):a.isMeshPhongMaterial?(r(e,a),c=e,u=a,c.specular.value.copy(u.specular),c.shininess.value=Math.max(u.shininess,1e-4),a.envMap&&(e.envMapIntensity.value=a.envMapIntensity)):a.isMeshStandardMaterial?(r(e,a),d=e,p=a,d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity),a.isMeshPhysicalMaterial&&(f=e,m=a,g=o,f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),1===m.side&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform)))):a.isMeshMatcapMaterial?(r(e,a),_=e,(v=a).matcap&&(_.matcap.value=v.matcap)):a.isMeshDepthMaterial?r(e,a):a.isMeshDistanceMaterial?(r(e,a),function(e,i){let r=t.get(i).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}(e,a)):a.isMeshNormalMaterial?r(e,a):a.isLineBasicMaterial?(x=e,M=a,x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,i(M.map,x.mapTransform)),a.isLineDashedMaterial&&(S=e,E=a,S.dashSize.value=E.dashSize,S.totalSize.value=E.dashSize+E.gapSize,S.scale.value=E.scale)):a.isPointsMaterial?(T=e,y=a,b=n,A=s,T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,T.size.value=y.size*b,T.scale.value=.5*A,y.map&&(T.map.value=y.map,i(y.map,T.uvTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,i(y.alphaMap,T.alphaMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest)):a.isSpriteMaterial?(w=e,R=a,w.diffuse.value.copy(R.color),w.opacity.value=R.opacity,w.rotation.value=R.rotation,R.map&&(w.map.value=R.map,i(R.map,w.mapTransform)),R.alphaMap&&(w.alphaMap.value=R.alphaMap,i(R.alphaMap,w.alphaMapTransform)),R.alphaTest>0&&(w.alphaTest.value=R.alphaTest)):a.isShadowMaterial?(e.color.value.copy(a.color),e.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function ne(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e){let t={boundary:0,storage:0};return"number"==typeof e||"boolean"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?m("WebGLRenderer: Texture samplers can not be part of an uniforms group."):m("WebGLRenderer: Unsupported uniform value type.",e),t}function h(t){let i=t.target;i.removeEventListener("dispose",h);let r=s.indexOf(i.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[i.id]),delete a[i.id],delete n[i.id]}return{bind:function(e,t){let i=t.program;r.uniformBlockBinding(e,i)},update:function(i,c){let u=a[i.id];void 0===u&&(function(e){let t=e.uniforms,i=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],a=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=a.length;e<r;e++){let r=l(a[e]),n=i%16,s=n%r.boundary,o=n+s;i+=s,0!==o&&16-o<r.storage&&(i+=16-o),t.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=i,i+=r.storage}}}let r=i%16;r>0&&(i+=16-r),e.__size=i,e.__cache={}}(i),u=function(t){let i=function(){for(let e=0;e<o;e++)if(-1===s.indexOf(e))return s.push(e),e;return g("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=i;let r=e.createBuffer(),a=t.__size,n=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,a,n),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,i,r),r}(i),a[i.id]=u,i.addEventListener("dispose",h));let d=c.program;r.updateUBOMapping(i,d);let p=t.render.frame;n[i.id]!==p&&(function(t){let i=a[t.id],r=t.uniforms,n=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,i);for(let t=0,i=r.length;t<i;t++){let i=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,a=i.length;r<a;r++){let a=i[r];if(!0===function(e,t,i,r){let a=e.value,n=t+"_"+i;if(void 0===r[n])return"number"==typeof a||"boolean"==typeof a?r[n]=a:r[n]=a.clone(),!0;{let e=r[n];if("number"==typeof a||"boolean"==typeof a){if(e!==a)return r[n]=a,!0}else if(!1===e.equals(a))return e.copy(a),!0}return!1}(a,t,r,n)){let t=a.__offset,i=Array.isArray(a.value)?a.value:[a.value],r=0;for(let n=0;n<i.length;n++){let s=i[n],o=l(s);"number"==typeof s||"boolean"==typeof s?(a.__data[0]=s,e.bufferSubData(e.UNIFORM_BUFFER,t+r,a.__data)):s.isMatrix3?(a.__data[0]=s.elements[0],a.__data[1]=s.elements[1],a.__data[2]=s.elements[2],a.__data[3]=0,a.__data[4]=s.elements[3],a.__data[5]=s.elements[4],a.__data[6]=s.elements[5],a.__data[7]=0,a.__data[8]=s.elements[6],a.__data[9]=s.elements[7],a.__data[10]=s.elements[8],a.__data[11]=0):(s.toArray(a.__data,r),r+=o.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,a.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(i),n[i.id]=p)},dispose:function(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},n={}}}}let nt=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;class nr{constructor(e={}){let t,i,r,a,n,l,h,c,d,f,v,x,M,S,E,T,y,b,A,w,R,C,D,L,{canvas:U=function(){let e=u("canvas");return e.style.display="block",e}(),context:I=null,depth:N=!0,stencil:O=!1,alpha:B=!1,antialias:H=!1,premultipliedAlpha:z=!0,preserveDrawingBuffer:G=!1,powerPreference:V="default",failIfMajorPerformanceCaveat:k=!1,reversedDepthBuffer:W=!1,outputBufferType:X=1009}=e;if(this.isWebGLRenderer=!0,null!==I){if("u">typeof WebGLRenderingContext&&I instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");t=I.getContextAttributes().alpha}else t=B;let j=new Set([1033,1031,1029]),q=new Set([1009,1014,1012,1020,1017,1018]),Z=new Uint32Array(4),Q=new Int32Array(4),$=null,ee=null,et=[],ei=[],er=null;this.domElement=U,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let ea=this,en=!1;this._outputColorSpace=s;let es=0,eo=0,el=null,eh=-1,ec=null,eu=new Y,ed=new Y,ep=null,ef=new eU(0),em=0,eg=U.width,e_=U.height,ev=1,ex=null,eM=null,eS=new Y(0,0,eg,e_),eE=new Y(0,0,eg,e_),eT=!1,ey=new tJ,eb=!1,eA=!1,ew=new J,eR=new P,eC=new Y,eP={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},eD=!1;function eL(){return null===el?ev:1}let eI=I;function eN(e,t){return U.getContext(e,t)}try{if("setAttribute"in U&&U.setAttribute("data-engine","three.js r183"),U.addEventListener("webglcontextlost",eB,!1),U.addEventListener("webglcontextrestored",eH,!1),U.addEventListener("webglcontextcreationerror",ez,!1),null===eI){let e="webgl2";if(eI=eN(e,{alpha:!0,depth:N,stencil:O,antialias:H,premultipliedAlpha:z,preserveDrawingBuffer:G,powerPreference:V,failIfMajorPerformanceCaveat:k}),null===eI)throw eN(e)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(e){throw g("WebGLRenderer: "+e.message),e}function eO(){(i=new ro(eI)).init(),C=new a3(eI,i),r=new i$(eI,i,e,C),a=new a0(eI,i),r.reversedDepthBuffer&&W&&a.buffers.depth.setReversed(!0),n=new rc(eI),l=new aN,h=new a1(eI,i,a,l,r,C,n),c=new rs(ea),d=new ik(eI),D=new iQ(eI,d),f=new rl(eI,d,n,D),v=new rd(eI,f,d,D,n),A=new ru(eI,r,h),T=new i0(l),x=new aI(ea,c,i,r,D,T),M=new a7(ea,l),S=new aH,E=new aX(i),b=new iZ(ea,c,a,v,t,z),y=new a$(ea,v,r),L=new ne(eI,n,r,a),w=new iJ(eI,i,n),R=new rh(eI,i,n),n.programs=x.programs,ea.capabilities=r,ea.extensions=i,ea.properties=l,ea.renderLists=S,ea.shadowMap=y,ea.state=a,ea.info=n}eO(),1009!==X&&(er=new rf(X,U.width,U.height,N,O));let eF=new a8(ea,eI);function eB(e){e.preventDefault(),p("WebGLRenderer: Context Lost."),en=!0}function eH(){p("WebGLRenderer: Context Restored."),en=!1;let e=n.autoReset,t=y.enabled,i=y.autoUpdate,r=y.needsUpdate,a=y.type;eO(),n.autoReset=e,y.enabled=t,y.autoUpdate=i,y.needsUpdate=r,y.type=a}function ez(e){g("WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eG(e){var t;let i=e.target;i.removeEventListener("dispose",eG),function(e){let t=l.get(e).programs;void 0!==t&&(t.forEach(function(e){x.releaseProgram(e)}),e.isShaderMaterial&&x.releaseShaderCache(e))}(t=i),l.remove(t)}function eV(e,t,i){!0===e.transparent&&2===e.side&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,eJ(e,t,i),e.side=0,e.needsUpdate=!0,eJ(e,t,i),e.side=2):eJ(e,t,i)}this.xr=eF,this.getContext=function(){return eI},this.getContextAttributes=function(){return eI.getContextAttributes()},this.forceContextLoss=function(){let e=i.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=i.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return ev},this.setPixelRatio=function(e){void 0!==e&&(ev=e,this.setSize(eg,e_,!1))},this.getSize=function(e){return e.set(eg,e_)},this.setSize=function(e,t,i=!0){if(eF.isPresenting)return void m("WebGLRenderer: Can't change size while VR device is presenting.");eg=e,e_=t,U.width=Math.floor(e*ev),U.height=Math.floor(t*ev),!0===i&&(U.style.width=e+"px",U.style.height=t+"px"),null!==er&&er.setSize(U.width,U.height),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(eg*ev,e_*ev).floor()},this.setDrawingBufferSize=function(e,t,i){eg=e,e_=t,ev=i,U.width=Math.floor(e*i),U.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(1009===X)return void console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");if(e){for(let t=0;t<e.length;t++)if(!0===e[t].isOutputPass){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}er.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(eu)},this.getViewport=function(e){return e.copy(eS)},this.setViewport=function(e,t,i,r){e.isVector4?eS.set(e.x,e.y,e.z,e.w):eS.set(e,t,i,r),a.viewport(eu.copy(eS).multiplyScalar(ev).round())},this.getScissor=function(e){return e.copy(eE)},this.setScissor=function(e,t,i,r){e.isVector4?eE.set(e.x,e.y,e.z,e.w):eE.set(e,t,i,r),a.scissor(ed.copy(eE).multiplyScalar(ev).round())},this.getScissorTest=function(){return eT},this.setScissorTest=function(e){a.setScissorTest(eT=e)},this.setOpaqueSort=function(e){ex=e},this.setTransparentSort=function(e){eM=e},this.getClearColor=function(e){return e.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor(...arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,i=!0){let r=0;if(e){let e=!1;if(null!==el){let t=el.texture.format;e=j.has(t)}if(e){let e=el.texture.type,t=q.has(e),i=b.getClearColor(),r=b.getClearAlpha(),a=i.r,n=i.g,s=i.b;t?(Z[0]=a,Z[1]=n,Z[2]=s,Z[3]=r,eI.clearBufferuiv(eI.COLOR,0,Z)):(Q[0]=a,Q[1]=n,Q[2]=s,Q[3]=r,eI.clearBufferiv(eI.COLOR,0,Q))}else r|=eI.COLOR_BUFFER_BIT}t&&(r|=eI.DEPTH_BUFFER_BIT),i&&(r|=eI.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(0xffffffff)),0!==r&&eI.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){U.removeEventListener("webglcontextlost",eB,!1),U.removeEventListener("webglcontextrestored",eH,!1),U.removeEventListener("webglcontextcreationerror",ez,!1),b.dispose(),S.dispose(),E.dispose(),l.dispose(),c.dispose(),v.dispose(),D.dispose(),L.dispose(),x.dispose(),eF.dispose(),eF.removeEventListener("sessionstart",eW),eF.removeEventListener("sessionend",eX),ej.stop()},this.renderBufferDirect=function(e,t,n,s,u,p){null===t&&(t=eP);let m=u.isMesh&&0>u.matrixWorld.determinant(),g=function(e,t,i,n,s){var u,d;!0!==t.isScene&&(t=eP),h.resetTextureUnits();let p=t.fog,f=n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial?t.environment:null,m=null===el?ea.outputColorSpace:!0===el.isXRRenderTarget?el.texture.colorSpace:o,g=n.isMeshStandardMaterial||n.isMeshLambertMaterial&&!n.envMap||n.isMeshPhongMaterial&&!n.envMap,_=c.get(n.envMap||f,g),v=!0===n.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,x=!!i.attributes.tangent&&(!!n.normalMap||n.anisotropy>0),S=!!i.morphAttributes.position,E=!!i.morphAttributes.normal,y=!!i.morphAttributes.color,b=0;n.toneMapped&&(null===el||!0===el.isXRRenderTarget)&&(b=ea.toneMapping);let w=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,R=void 0!==w?w.length:0,C=l.get(n),P=ee.state.lights;if(!0===eb&&(!0===eA||e!==ec)){let t=e===ec&&n.id===eh;T.setState(n,e,t)}let D=!1;n.version===C.__version?(C.needsLights&&C.lightsStateVersion!==P.state.version||C.outputColorSpace!==m||s.isBatchedMesh&&!1===C.batching||!s.isBatchedMesh&&!0===C.batching||s.isBatchedMesh&&!0===C.batchingColor&&null===s.colorTexture||s.isBatchedMesh&&!1===C.batchingColor&&null!==s.colorTexture||s.isInstancedMesh&&!1===C.instancing||!s.isInstancedMesh&&!0===C.instancing||s.isSkinnedMesh&&!1===C.skinning||!s.isSkinnedMesh&&!0===C.skinning||s.isInstancedMesh&&!0===C.instancingColor&&null===s.instanceColor||s.isInstancedMesh&&!1===C.instancingColor&&null!==s.instanceColor||s.isInstancedMesh&&!0===C.instancingMorph&&null===s.morphTexture||s.isInstancedMesh&&!1===C.instancingMorph&&null!==s.morphTexture||C.envMap!==_||!0===n.fog&&C.fog!==p||void 0!==C.numClippingPlanes&&(C.numClippingPlanes!==T.numPlanes||C.numIntersection!==T.numIntersection)||C.vertexAlphas!==v||C.vertexTangents!==x||C.morphTargets!==S||C.morphNormals!==E||C.morphColors!==y||C.toneMapping!==b||C.morphTargetsCount!==R)&&(D=!0):(D=!0,C.__version=n.version);let U=C.currentProgram;!0===D&&(U=eJ(n,t,s));let I=!1,N=!1,O=!1,F=U.getUniforms(),B=C.uniforms;if(a.useProgram(U.program)&&(I=!0,N=!0,O=!0),n.id!==eh&&(eh=n.id,N=!0),I||ec!==e){a.buffers.depth.getReversed()&&!0!==e.reversedDepth&&(e._reversedDepth=!0,e.updateProjectionMatrix()),F.setValue(eI,"projectionMatrix",e.projectionMatrix),F.setValue(eI,"viewMatrix",e.matrixWorldInverse);let t=F.map.cameraPosition;void 0!==t&&t.setValue(eI,eR.setFromMatrixPosition(e.matrixWorld)),r.logarithmicDepthBuffer&&F.setValue(eI,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&F.setValue(eI,"isOrthographic",!0===e.isOrthographicCamera),ec!==e&&(ec=e,N=!0,O=!0)}if(C.needsLights&&(P.state.directionalShadowMap.length>0&&F.setValue(eI,"directionalShadowMap",P.state.directionalShadowMap,h),P.state.spotShadowMap.length>0&&F.setValue(eI,"spotShadowMap",P.state.spotShadowMap,h),P.state.pointShadowMap.length>0&&F.setValue(eI,"pointShadowMap",P.state.pointShadowMap,h)),s.isSkinnedMesh){F.setOptional(eI,s,"bindMatrix"),F.setOptional(eI,s,"bindMatrixInverse");let e=s.skeleton;e&&(null===e.boneTexture&&e.computeBoneTexture(),F.setValue(eI,"boneTexture",e.boneTexture,h))}s.isBatchedMesh&&(F.setOptional(eI,s,"batchingTexture"),F.setValue(eI,"batchingTexture",s._matricesTexture,h),F.setOptional(eI,s,"batchingIdTexture"),F.setValue(eI,"batchingIdTexture",s._indirectTexture,h),F.setOptional(eI,s,"batchingColorTexture"),null!==s._colorsTexture&&F.setValue(eI,"batchingColorTexture",s._colorsTexture,h));let H=i.morphAttributes;if((void 0!==H.position||void 0!==H.normal||void 0!==H.color)&&A.update(s,i,U),(N||C.receiveShadow!==s.receiveShadow)&&(C.receiveShadow=s.receiveShadow,F.setValue(eI,"receiveShadow",s.receiveShadow)),(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)&&null===n.envMap&&null!==t.environment&&(B.envMapIntensity.value=t.environmentIntensity),void 0!==B.dfgLUT&&(B.dfgLUT.value=(null===ni&&((ni=new tW(nt,16,16,1030,1016)).name="DFG_LUT",ni.minFilter=1006,ni.magFilter=1006,ni.wrapS=1001,ni.wrapT=1001,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni)),N&&(F.setValue(eI,"toneMappingExposure",ea.toneMappingExposure),C.needsLights&&(u=B,d=O,u.ambientLightColor.needsUpdate=d,u.lightProbe.needsUpdate=d,u.directionalLights.needsUpdate=d,u.directionalLightShadows.needsUpdate=d,u.pointLights.needsUpdate=d,u.pointLightShadows.needsUpdate=d,u.spotLights.needsUpdate=d,u.spotLightShadows.needsUpdate=d,u.rectAreaLights.needsUpdate=d,u.hemisphereLights.needsUpdate=d),p&&!0===n.fog&&M.refreshFogUniforms(B,p),M.refreshMaterialUniforms(B,n,ev,e_,ee.state.transmissionRenderTarget[e.id]),al.upload(eI,e$(C),B,h)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(al.upload(eI,e$(C),B,h),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&F.setValue(eI,"center",s.center),F.setValue(eI,"modelViewMatrix",s.modelViewMatrix),F.setValue(eI,"normalMatrix",s.normalMatrix),F.setValue(eI,"modelMatrix",s.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){let e=n.uniformsGroups;for(let t=0,i=e.length;t<i;t++){let i=e[t];L.update(i,U),L.bind(i,U)}}return U}(e,t,n,s,u);a.setMaterial(s,m);let v=n.index,x=1;if(!0===s.wireframe){if(void 0===(v=f.getWireframeAttribute(n)))return;x=2}let S=n.drawRange,E=n.attributes.position,y=S.start*x,b=(S.start+S.count)*x;null!==p&&(y=Math.max(y,p.start*x),b=Math.min(b,(p.start+p.count)*x)),null!==v?(y=Math.max(y,0),b=Math.min(b,v.count)):null!=E&&(y=Math.max(y,0),b=Math.min(b,E.count));let C=b-y;if(C<0||C===1/0)return;D.setup(u,s,g,n,v);let P,U=w;if(null!==v&&(P=d.get(v),(U=R).setIndex(P)),u.isMesh)!0===s.wireframe?(a.setLineWidth(s.wireframeLinewidth*eL()),U.setMode(eI.LINES)):U.setMode(eI.TRIANGLES);else if(u.isLine){let e=s.linewidth;void 0===e&&(e=1),a.setLineWidth(e*eL()),u.isLineSegments?U.setMode(eI.LINES):u.isLineLoop?U.setMode(eI.LINE_LOOP):U.setMode(eI.LINE_STRIP)}else u.isPoints?U.setMode(eI.POINTS):u.isSprite&&U.setMode(eI.TRIANGLES);if(u.isBatchedMesh)if(null!==u._multiDrawInstances)_("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),U.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances);else if(i.get("WEBGL_multi_draw"))U.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else{let e=u._multiDrawStarts,t=u._multiDrawCounts,i=u._multiDrawCount,r=v?d.get(v).bytesPerElement:1,a=l.get(s).currentProgram.getUniforms();for(let n=0;n<i;n++)a.setValue(eI,"_gl_DrawID",n),U.render(e[n]/r,t[n])}else if(u.isInstancedMesh)U.renderInstances(y,C,u.count);else if(n.isInstancedBufferGeometry){let e=void 0!==n._maxInstanceCount?n._maxInstanceCount:1/0,t=Math.min(n.instanceCount,e);U.renderInstances(y,C,t)}else U.render(y,C)},this.compile=function(e,t,i=null){null===i&&(i=e),(ee=E.get(i)).init(t),ei.push(ee),i.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(ee.pushLight(e),e.castShadow&&ee.pushShadow(e))}),e!==i&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(ee.pushLight(e),e.castShadow&&ee.pushShadow(e))}),ee.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let a=0;a<t.length;a++){let n=t[a];eV(n,i,e),r.add(n)}else eV(t,i,e),r.add(t)}),ee=ei.pop(),r},this.compileAsync=function(e,t,r=null){let a=this.compile(e,t,r);return new Promise(t=>{function r(){if(a.forEach(function(e){l.get(e).currentProgram.isReady()&&a.delete(e)}),0===a.size)return void t(e);setTimeout(r,10)}null!==i.get("KHR_parallel_shader_compile")?r():setTimeout(r,10)})};let ek=null;function eW(){ej.stop()}function eX(){ej.start()}let ej=new iV;function eY(e,t,i,r){if(!1===e.visible)return;if(e.layers.test(t.layers)){if(e.isGroup)i=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)ee.pushLight(e),e.castShadow&&ee.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ey.intersectsSprite(e)){r&&eC.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ew);let t=v.update(e),a=e.material;a.visible&&$.push(e,t,a,i,eC.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ey.intersectsObject(e))){let t=v.update(e),a=e.material;if(r&&(void 0!==e.boundingSphere?(null===e.boundingSphere&&e.computeBoundingSphere(),eC.copy(e.boundingSphere.center)):(null===t.boundingSphere&&t.computeBoundingSphere(),eC.copy(t.boundingSphere.center)),eC.applyMatrix4(e.matrixWorld).applyMatrix4(ew)),Array.isArray(a)){let r=t.groups;for(let n=0,s=r.length;n<s;n++){let s=r[n],o=a[s.materialIndex];o&&o.visible&&$.push(e,t,o,i,eC.z,s)}}else a.visible&&$.push(e,t,a,i,eC.z,null)}}let a=e.children;for(let e=0,n=a.length;e<n;e++)eY(a[e],t,i,r)}function eq(e,t,i,r){let{opaque:n,transmissive:s,transparent:o}=e;ee.setupLightsView(i),!0===eb&&T.setGlobalState(ea.clippingPlanes,i),r&&a.viewport(eu.copy(r)),n.length>0&&eZ(n,t,i),s.length>0&&eZ(s,t,i),o.length>0&&eZ(o,t,i),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function eK(e,t,a,n){if((!0===a.isScene?a.overrideMaterial:null)!==null)return;if(void 0===ee.state.transmissionRenderTarget[n.id]){let e=i.has("EXT_color_buffer_half_float")||i.has("EXT_color_buffer_float");ee.state.transmissionRenderTarget[n.id]=new K(1,1,{generateMipmaps:!0,type:e?1016:1009,minFilter:1008,samples:Math.max(4,r.samples),stencilBuffer:O,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:F.workingColorSpace})}let s=ee.state.transmissionRenderTarget[n.id],o=n.viewport||eu;s.setSize(o.z*ea.transmissionResolutionScale,o.w*ea.transmissionResolutionScale);let l=ea.getRenderTarget(),c=ea.getActiveCubeFace(),u=ea.getActiveMipmapLevel();ea.setRenderTarget(s),ea.getClearColor(ef),(em=ea.getClearAlpha())<1&&ea.setClearColor(0xffffff,.5),ea.clear(),eD&&b.render(a);let d=ea.toneMapping;ea.toneMapping=0;let p=n.viewport;if(void 0!==n.viewport&&(n.viewport=void 0),ee.setupLightsView(n),!0===eb&&T.setGlobalState(ea.clippingPlanes,n),eZ(e,a,n),h.updateMultisampleRenderTarget(s),h.updateRenderTargetMipmap(s),!1===i.has("WEBGL_multisampled_render_to_texture")){let e=!1;for(let i=0,r=t.length;i<r;i++){let{object:r,geometry:s,material:o,group:l}=t[i];if(2===o.side&&r.layers.test(n.layers)){let t=o.side;o.side=1,o.needsUpdate=!0,eQ(r,a,n,s,o,l),o.side=t,o.needsUpdate=!0,e=!0}}!0===e&&(h.updateMultisampleRenderTarget(s),h.updateRenderTargetMipmap(s))}ea.setRenderTarget(l,c,u),ea.setClearColor(ef,em),void 0!==p&&(n.viewport=p),ea.toneMapping=d}function eZ(e,t,i){let r=!0===t.isScene?t.overrideMaterial:null;for(let a=0,n=e.length;a<n;a++){let n=e[a],{object:s,geometry:o,group:l}=n,h=n.material;!0===h.allowOverride&&null!==r&&(h=r),s.layers.test(i.layers)&&eQ(s,t,i,o,h,l)}}function eQ(e,t,i,r,a,n){e.onBeforeRender(ea,t,i,r,a,n),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(ea,t,i,r,e,n),!0===a.transparent&&2===a.side&&!1===a.forceSinglePass?(a.side=1,a.needsUpdate=!0,ea.renderBufferDirect(i,t,r,a,e,n),a.side=0,a.needsUpdate=!0,ea.renderBufferDirect(i,t,r,a,e,n),a.side=2):ea.renderBufferDirect(i,t,r,a,e,n),e.onAfterRender(ea,t,i,r,a,n)}function eJ(e,t,i){var r;!0!==t.isScene&&(t=eP);let a=l.get(e),n=ee.state.lights,s=ee.state.shadowsArray,o=n.state.version,h=x.getParameters(e,n.state,s,t,i),u=x.getProgramCacheKey(h),d=a.programs;a.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,a.fog=t.fog;let p=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;a.envMap=c.get(e.envMap||a.environment,p),a.envMapRotation=null!==a.environment&&null===e.envMap?t.environmentRotation:e.envMapRotation,void 0===d&&(e.addEventListener("dispose",eG),a.programs=d=new Map);let f=d.get(u);if(void 0!==f){if(a.currentProgram===f&&a.lightsStateVersion===o)return e0(e,h),f}else h.uniforms=x.getUniforms(e),e.onBeforeCompile(h,ea),f=x.acquireProgram(h,u),d.set(u,f),a.uniforms=h.uniforms;let m=a.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(m.clippingPlanes=T.uniform),e0(e,h),a.needsLights=(r=e).isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&!0===r.lights,a.lightsStateVersion=o,a.needsLights&&(m.ambientLightColor.value=n.state.ambient,m.lightProbe.value=n.state.probe,m.directionalLights.value=n.state.directional,m.directionalLightShadows.value=n.state.directionalShadow,m.spotLights.value=n.state.spot,m.spotLightShadows.value=n.state.spotShadow,m.rectAreaLights.value=n.state.rectArea,m.ltc_1.value=n.state.rectAreaLTC1,m.ltc_2.value=n.state.rectAreaLTC2,m.pointLights.value=n.state.point,m.pointLightShadows.value=n.state.pointShadow,m.hemisphereLights.value=n.state.hemi,m.directionalShadowMatrix.value=n.state.directionalShadowMatrix,m.spotLightMatrix.value=n.state.spotLightMatrix,m.spotLightMap.value=n.state.spotLightMap,m.pointShadowMatrix.value=n.state.pointShadowMatrix),a.currentProgram=f,a.uniformsList=null,f}function e$(e){if(null===e.uniformsList){let t=e.currentProgram.getUniforms();e.uniformsList=al.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function e0(e,t){let i=l.get(e);i.outputColorSpace=t.outputColorSpace,i.batching=t.batching,i.batchingColor=t.batchingColor,i.instancing=t.instancing,i.instancingColor=t.instancingColor,i.instancingMorph=t.instancingMorph,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}ej.setAnimationLoop(function(e){ek&&ek(e)}),"u">typeof self&&ej.setContext(self),this.setAnimationLoop=function(e){ek=e,eF.setAnimationLoop(e),null===e?ej.stop():ej.start()},eF.addEventListener("sessionstart",eW),eF.addEventListener("sessionend",eX),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera)return void g("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===en)return;let i=!0===eF.enabled&&!0===eF.isPresenting,r=null!==er&&(null===el||i)&&er.begin(ea,el);if(!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===eF.enabled&&!0===eF.isPresenting&&(null===er||!1===er.isCompositing())&&(!0===eF.cameraAutoUpdate&&eF.updateCamera(t),t=eF.getCamera()),!0===e.isScene&&e.onBeforeRender(ea,e,t,el),(ee=E.get(e,ei.length)).init(t),ei.push(ee),ew.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ey.setFromProjectionMatrix(ew,2e3,t.reversedDepth),eA=this.localClippingEnabled,eb=T.init(this.clippingPlanes,eA),($=S.get(e,et.length)).init(),et.push($),!0===eF.enabled&&!0===eF.isPresenting){let e=ea.xr.getDepthSensingMesh();null!==e&&eY(e,t,-1/0,ea.sortObjects)}eY(e,t,0,ea.sortObjects),$.finish(),!0===ea.sortObjects&&$.sort(ex,eM),(eD=!1===eF.enabled||!1===eF.isPresenting||!1===eF.hasDepthSensing())&&b.addToRenderList($,e),this.info.render.frame++,!0===eb&&T.beginShadows();let a=ee.state.shadowsArray;if(y.render(a,e,t),!0===eb&&T.endShadows(),!0===this.info.autoReset&&this.info.reset(),(r&&er.hasRenderPass())===!1){let i=$.opaque,r=$.transmissive;if(ee.setupLights(),t.isArrayCamera){let a=t.cameras;if(r.length>0)for(let t=0,n=a.length;t<n;t++)eK(i,r,e,a[t]);eD&&b.render(e);for(let t=0,i=a.length;t<i;t++){let i=a[t];eq($,e,i,i.viewport)}}else r.length>0&&eK(i,r,e,t),eD&&b.render(e),eq($,e,t)}null!==el&&0===eo&&(h.updateMultisampleRenderTarget(el),h.updateRenderTargetMipmap(el)),r&&er.end(ea),!0===e.isScene&&e.onAfterRender(ea,e,t),D.resetDefaultState(),eh=-1,ec=null,ei.pop(),ei.length>0?(ee=ei[ei.length-1],!0===eb&&T.setGlobalState(ea.clippingPlanes,ee.state.camera)):ee=null,et.pop(),$=et.length>0?et[et.length-1]:null},this.getActiveCubeFace=function(){return es},this.getActiveMipmapLevel=function(){return eo},this.getRenderTarget=function(){return el},this.setRenderTargetTextures=function(e,t,i){let r=l.get(e);r.__autoAllocateDepthBuffer=!1===e.resolveDepthBuffer,!1===r.__autoAllocateDepthBuffer&&(r.__useRenderToTexture=!1),l.get(e.texture).__webglTexture=t,l.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:i,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let i=l.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t};let e1=eI.createFramebuffer();this.setRenderTarget=function(e,t=0,i=0){el=e,es=t,eo=i;let r=null,n=!1,s=!1;if(e){let o=l.get(e);if(void 0!==o.__useDefaultFramebuffer){a.bindFramebuffer(eI.FRAMEBUFFER,o.__webglFramebuffer),eu.copy(e.viewport),ed.copy(e.scissor),ep=e.scissorTest,a.viewport(eu),a.scissor(ed),a.setScissorTest(ep),eh=-1;return}if(void 0===o.__webglFramebuffer)h.setupRenderTarget(e);else if(o.__hasExternalTextures)h.rebindTextures(e,l.get(e.texture).__webglTexture,l.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(null!==t&&l.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");h.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(s=!0);let u=l.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(u[t])?u[t][i]:u[t],n=!0):r=e.samples>0&&!1===h.useMultisampledRTT(e)?l.get(e).__webglMultisampledFramebuffer:Array.isArray(u)?u[i]:u,eu.copy(e.viewport),ed.copy(e.scissor),ep=e.scissorTest}else eu.copy(eS).multiplyScalar(ev).floor(),ed.copy(eE).multiplyScalar(ev).floor(),ep=eT;if(0!==i&&(r=e1),a.bindFramebuffer(eI.FRAMEBUFFER,r)&&a.drawBuffers(e,r),a.viewport(eu),a.scissor(ed),a.setScissorTest(ep),n){let r=l.get(e.texture);eI.framebufferTexture2D(eI.FRAMEBUFFER,eI.COLOR_ATTACHMENT0,eI.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,i)}else if(s)for(let r=0;r<e.textures.length;r++){let a=l.get(e.textures[r]);eI.framebufferTextureLayer(eI.FRAMEBUFFER,eI.COLOR_ATTACHMENT0+r,a.__webglTexture,i,t)}else if(null!==e&&0!==i){let t=l.get(e.texture);eI.framebufferTexture2D(eI.FRAMEBUFFER,eI.COLOR_ATTACHMENT0,eI.TEXTURE_2D,t.__webglTexture,i)}eh=-1},this.readRenderTargetPixels=function(e,t,i,n,s,o,h,c=0){if(!(e&&e.isWebGLRenderTarget))return void g("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=l.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==h&&(u=u[h]),u){a.bindFramebuffer(eI.FRAMEBUFFER,u);try{let a=e.textures[c],l=a.format,h=a.type;if(e.textures.length>1&&eI.readBuffer(eI.COLOR_ATTACHMENT0+c),!r.textureFormatReadable(l))return void g("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!r.textureTypeReadable(h))return void g("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-n&&i>=0&&i<=e.height-s&&eI.readPixels(t,i,n,s,C.convert(l),C.convert(h),o)}finally{let e=null!==el?l.get(el).__webglFramebuffer:null;a.bindFramebuffer(eI.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,i,n,s,o,h,c=0){if(!(e&&e.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=l.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==h&&(u=u[h]),u)if(t>=0&&t<=e.width-n&&i>=0&&i<=e.height-s){var d;a.bindFramebuffer(eI.FRAMEBUFFER,u);let h=e.textures[c],p=h.format,f=h.type;if(e.textures.length>1&&eI.readBuffer(eI.COLOR_ATTACHMENT0+c),!r.textureFormatReadable(p))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!r.textureTypeReadable(f))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let m=eI.createBuffer();eI.bindBuffer(eI.PIXEL_PACK_BUFFER,m),eI.bufferData(eI.PIXEL_PACK_BUFFER,o.byteLength,eI.STREAM_READ),eI.readPixels(t,i,n,s,C.convert(p),C.convert(f),0);let g=null!==el?l.get(el).__webglFramebuffer:null;a.bindFramebuffer(eI.FRAMEBUFFER,g);let _=eI.fenceSync(eI.SYNC_GPU_COMMANDS_COMPLETE,0);return eI.flush(),await (d=eI,new Promise(function(e,t){setTimeout(function i(){switch(d.clientWaitSync(_,d.SYNC_FLUSH_COMMANDS_BIT,0)){case d.WAIT_FAILED:t();break;case d.TIMEOUT_EXPIRED:setTimeout(i,4);break;default:e()}},4)})),eI.bindBuffer(eI.PIXEL_PACK_BUFFER,m),eI.getBufferSubData(eI.PIXEL_PACK_BUFFER,0,o),eI.deleteBuffer(m),eI.deleteSync(_),o}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(e,t=null,i=0){let r=Math.pow(2,-i),n=Math.floor(e.image.width*r),s=Math.floor(e.image.height*r),o=null!==t?t.x:0,l=null!==t?t.y:0;h.setTexture2D(e,0),eI.copyTexSubImage2D(eI.TEXTURE_2D,i,0,0,o,l,n,s),a.unbindTexture()};let e3=eI.createFramebuffer(),e2=eI.createFramebuffer();this.copyTextureToTexture=function(e,t,i=null,r=null,n=0,s=0){let o,c,u,d,p,f,m,g,_,v,x=e.isCompressedTexture?e.mipmaps[s]:e.image;if(null!==i)o=i.max.x-i.min.x,c=i.max.y-i.min.y,u=i.isBox3?i.max.z-i.min.z:1,d=i.min.x,p=i.min.y,f=i.isBox3?i.min.z:0;else{let t=Math.pow(2,-n);o=Math.floor(x.width*t),c=Math.floor(x.height*t),u=e.isDataArrayTexture?x.depth:e.isData3DTexture?Math.floor(x.depth*t):1,d=0,p=0,f=0}null!==r?(m=r.x,g=r.y,_=r.z):(m=0,g=0,_=0);let M=C.convert(t.format),S=C.convert(t.type);t.isData3DTexture?(h.setTexture3D(t,0),v=eI.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(h.setTexture2DArray(t,0),v=eI.TEXTURE_2D_ARRAY):(h.setTexture2D(t,0),v=eI.TEXTURE_2D),eI.pixelStorei(eI.UNPACK_FLIP_Y_WEBGL,t.flipY),eI.pixelStorei(eI.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),eI.pixelStorei(eI.UNPACK_ALIGNMENT,t.unpackAlignment);let E=eI.getParameter(eI.UNPACK_ROW_LENGTH),T=eI.getParameter(eI.UNPACK_IMAGE_HEIGHT),y=eI.getParameter(eI.UNPACK_SKIP_PIXELS),b=eI.getParameter(eI.UNPACK_SKIP_ROWS),A=eI.getParameter(eI.UNPACK_SKIP_IMAGES);eI.pixelStorei(eI.UNPACK_ROW_LENGTH,x.width),eI.pixelStorei(eI.UNPACK_IMAGE_HEIGHT,x.height),eI.pixelStorei(eI.UNPACK_SKIP_PIXELS,d),eI.pixelStorei(eI.UNPACK_SKIP_ROWS,p),eI.pixelStorei(eI.UNPACK_SKIP_IMAGES,f);let w=e.isDataArrayTexture||e.isData3DTexture,R=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let i=l.get(e),r=l.get(t),h=l.get(i.__renderTarget),v=l.get(r.__renderTarget);a.bindFramebuffer(eI.READ_FRAMEBUFFER,h.__webglFramebuffer),a.bindFramebuffer(eI.DRAW_FRAMEBUFFER,v.__webglFramebuffer);for(let i=0;i<u;i++)w&&(eI.framebufferTextureLayer(eI.READ_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,l.get(e).__webglTexture,n,f+i),eI.framebufferTextureLayer(eI.DRAW_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,l.get(t).__webglTexture,s,_+i)),eI.blitFramebuffer(d,p,o,c,m,g,o,c,eI.DEPTH_BUFFER_BIT,eI.NEAREST);a.bindFramebuffer(eI.READ_FRAMEBUFFER,null),a.bindFramebuffer(eI.DRAW_FRAMEBUFFER,null)}else if(0!==n||e.isRenderTargetTexture||l.has(e)){let i=l.get(e),r=l.get(t);a.bindFramebuffer(eI.READ_FRAMEBUFFER,e3),a.bindFramebuffer(eI.DRAW_FRAMEBUFFER,e2);for(let e=0;e<u;e++)w?eI.framebufferTextureLayer(eI.READ_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,i.__webglTexture,n,f+e):eI.framebufferTexture2D(eI.READ_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,eI.TEXTURE_2D,i.__webglTexture,n),R?eI.framebufferTextureLayer(eI.DRAW_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,r.__webglTexture,s,_+e):eI.framebufferTexture2D(eI.DRAW_FRAMEBUFFER,eI.COLOR_ATTACHMENT0,eI.TEXTURE_2D,r.__webglTexture,s),0!==n?eI.blitFramebuffer(d,p,o,c,m,g,o,c,eI.COLOR_BUFFER_BIT,eI.NEAREST):R?eI.copyTexSubImage3D(v,s,m,g,_+e,d,p,o,c):eI.copyTexSubImage2D(v,s,m,g,d,p,o,c);a.bindFramebuffer(eI.READ_FRAMEBUFFER,null),a.bindFramebuffer(eI.DRAW_FRAMEBUFFER,null)}else R?e.isDataTexture||e.isData3DTexture?eI.texSubImage3D(v,s,m,g,_,o,c,u,M,S,x.data):t.isCompressedArrayTexture?eI.compressedTexSubImage3D(v,s,m,g,_,o,c,u,M,x.data):eI.texSubImage3D(v,s,m,g,_,o,c,u,M,S,x):e.isDataTexture?eI.texSubImage2D(eI.TEXTURE_2D,s,m,g,o,c,M,S,x.data):e.isCompressedTexture?eI.compressedTexSubImage2D(eI.TEXTURE_2D,s,m,g,x.width,x.height,M,x.data):eI.texSubImage2D(eI.TEXTURE_2D,s,m,g,o,c,M,S,x);eI.pixelStorei(eI.UNPACK_ROW_LENGTH,E),eI.pixelStorei(eI.UNPACK_IMAGE_HEIGHT,T),eI.pixelStorei(eI.UNPACK_SKIP_PIXELS,y),eI.pixelStorei(eI.UNPACK_SKIP_ROWS,b),eI.pixelStorei(eI.UNPACK_SKIP_IMAGES,A),0===s&&t.generateMipmaps&&eI.generateMipmap(v),a.unbindTexture()},this.initRenderTarget=function(e){void 0===l.get(e).__webglFramebuffer&&h.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?h.setTextureCube(e,0):e.isData3DTexture?h.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?h.setTexture2DArray(e,0):h.setTexture2D(e,0),a.unbindTexture()},this.resetState=function(){es=0,eo=0,el=null,a.reset(),D.reset()},"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=F._getDrawingBufferColorSpace(e),t.unpackColorSpace=F._getUnpackColorSpace()}}let na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class nn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let ns=new iL(-1,1,1,-1,0,1);class no extends tx{constructor(){super(),this.setAttribute("position",new to([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new to([0,2,0,0,2,0],2))}}let nl=new no;class nh{constructor(e){this._mesh=new tV(nl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ns)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nc extends nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ii?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=t7.clone(e.uniforms),this.material=new ii({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new nh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nu extends nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r,a,n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,0xffffffff),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,0xffffffff),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class nd extends nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class np{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let i=e.getSize(new R);this._width=i.width,this._height=i.height,(t=new K(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:1016})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nc(na),this.copyPass.material.blending=0,this.timer=new iO}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(!1!==r.enabled){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==nu&&(r instanceof nu?i=!0:r instanceof nd&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nf extends nn{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new eU}render(e,t,i){let r,a,n=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(r),null!==this.overrideMaterial&&(this.scene.overrideMaterial=a),e.autoClear=n}}let nm={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},ng={type:"change"},n_={type:"start"},nv={type:"end"},nx=new tC,nM=new tq,nS=Math.cos(70*w.DEG2RAD),nE=new P,nT=2*Math.PI,ny={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};class nb extends iz{constructor(e,t=null){super(e,t),this.state=ny.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:a.ROTATE,MIDDLE:a.DOLLY,RIGHT:a.PAN},this.touches={ONE:n.ROTATE,TWO:n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new C,this._lastTargetPosition=new P,this._quat=new C().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iH,this._sphericalDelta=new iH,this._scale=1,this._panOffset=new P,this._rotateStart=new R,this._rotateEnd=new R,this._rotateDelta=new R,this._panStart=new R,this._panEnd=new R,this._panDelta=new R,this._dollyStart=new R,this._dollyEnd=new R,this._dollyDelta=new R,this._dollyDirection=new P,this._mouse=new R,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nw.bind(this),this._onPointerDown=nA.bind(this),this._onPointerUp=nR.bind(this),this._onContextMenu=nN.bind(this),this._onMouseWheel=nD.bind(this),this._onKeyDown=nL.bind(this),this._onTouchStart=nU.bind(this),this._onTouchMove=nI.bind(this),this._onMouseDown=nC.bind(this),this._onMouseMove=nP.bind(this),this._interceptControlDown=nO.bind(this),this._interceptControlUp=nF.bind(this),null!==this.domElement&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,"grab"===e?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){null!==this._domElementKeyEvents&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ng),this.update(),this.state=ny.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;nE.copy(t).sub(this.target),nE.applyQuaternion(this._quat),this._spherical.setFromVector3(nE),this.autoRotate&&this.state===ny.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=nT:i>Math.PI&&(i-=nT),r<-Math.PI?r+=nT:r>Math.PI&&(r-=nT),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),!0===this.enableDamping?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=e!=this._spherical.radius}if(nE.setFromSpherical(this._spherical),nE.applyQuaternion(this._quatInverse),t.copy(this.target).add(nE),this.object.lookAt(this.target),!0===this.enableDamping?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=nE.length();e=this._clampDistance(t*this._scale);let i=t-e;this.object.position.addScaledVector(this._dollyDirection,i),this.object.updateMatrixWorld(),a=!!i}else if(this.object.isOrthographicCamera){let t=new P(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let i=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=i!==this.object.zoom;let r=new P(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=nE.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;null!==e&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(nx.origin.copy(this.object.position),nx.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nx.direction))<nS?this.object.lookAt(this.target):(nM.setFromNormalAndCoplanarPoint(this.object.up,this.target),nx.intersectPlane(nM,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,!!(a||this._lastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this._lastQuaternion.dot(this.object.quaternion))>1e-6||this._lastTargetPosition.distanceToSquared(this.target)>1e-6)&&(this.dispatchEvent(ng),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0)}_getAutoRotationAngle(e){return null!==e?nT/60*this.autoRotateSpeed*e:nT/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(.01*e);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nE.setFromMatrixColumn(t,0),nE.multiplyScalar(-e),this._panOffset.add(nE)}_panUp(e,t){!0===this.screenSpacePanning?nE.setFromMatrixColumn(t,1):(nE.setFromMatrixColumn(t,0),nE.crossVectors(this.object.up,nE)),nE.multiplyScalar(e),this._panOffset.add(nE)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;nE.copy(r).sub(this.target);let a=nE.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s*2)+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nT*this._rotateDelta.x/t.clientHeight),this._rotateUp(nT*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nT*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nT*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nT*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nT*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(1===this._pointers.length)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(1===this._pointers.length)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(1==this._pointers.length)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nT*this._rotateDelta.x/t.clientHeight),this._rotateUp(nT*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(1===this._pointers.length)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return void this._pointers.splice(t,1)}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];void 0===t&&(t=new R,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nA(e){!1!==this.enabled&&(0===this._pointers.length&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),"touch"===e.pointerType?this._onTouchStart(e):this._onMouseDown(e),"grab"===this._cursorStyle&&(this.domElement.style.cursor="grabbing")))}function nw(e){!1!==this.enabled&&("touch"===e.pointerType?this._onTouchMove(e):this._onMouseMove(e))}function nR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nv),this.state=ny.NONE,"grab"===this._cursorStyle&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y})}}function nC(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.DOLLY:if(!1===this.enableZoom)return;this._handleMouseDownDolly(e),this.state=ny.DOLLY;break;case a.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===this.enablePan)return;this._handleMouseDownPan(e),this.state=ny.PAN}else{if(!1===this.enableRotate)return;this._handleMouseDownRotate(e),this.state=ny.ROTATE}break;case a.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===this.enableRotate)return;this._handleMouseDownRotate(e),this.state=ny.ROTATE}else{if(!1===this.enablePan)return;this._handleMouseDownPan(e),this.state=ny.PAN}break;default:this.state=ny.NONE}this.state!==ny.NONE&&this.dispatchEvent(n_)}function nP(e){switch(this.state){case ny.ROTATE:if(!1===this.enableRotate)return;this._handleMouseMoveRotate(e);break;case ny.DOLLY:if(!1===this.enableZoom)return;this._handleMouseMoveDolly(e);break;case ny.PAN:if(!1===this.enablePan)return;this._handleMouseMovePan(e)}}function nD(e){!1===this.enabled||!1===this.enableZoom||this.state!==ny.NONE||(e.preventDefault(),this.dispatchEvent(n_),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(nv))}function nL(e){!1!==this.enabled&&this._handleKeyDown(e)}function nU(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case n.ROTATE:if(!1===this.enableRotate)return;this._handleTouchStartRotate(e),this.state=ny.TOUCH_ROTATE;break;case n.PAN:if(!1===this.enablePan)return;this._handleTouchStartPan(e),this.state=ny.TOUCH_PAN;break;default:this.state=ny.NONE}break;case 2:switch(this.touches.TWO){case n.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchStartDollyPan(e),this.state=ny.TOUCH_DOLLY_PAN;break;case n.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchStartDollyRotate(e),this.state=ny.TOUCH_DOLLY_ROTATE;break;default:this.state=ny.NONE}break;default:this.state=ny.NONE}this.state!==ny.NONE&&this.dispatchEvent(n_)}function nI(e){switch(this._trackPointer(e),this.state){case ny.TOUCH_ROTATE:if(!1===this.enableRotate)return;this._handleTouchMoveRotate(e),this.update();break;case ny.TOUCH_PAN:if(!1===this.enablePan)return;this._handleTouchMovePan(e),this.update();break;case ny.TOUCH_DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchMoveDollyPan(e),this.update();break;case ny.TOUCH_DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ny.NONE}}function nN(e){!1!==this.enabled&&e.preventDefault()}function nO(e){"Control"===e.key&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nF(e){"Control"===e.key&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nB(e,t,i,r,a){let n=0,s=e.getImageData(t,i,r,a).data;for(let e=0;e<r;e++)for(let t=0;t<a;t++)n+=s[(e+t*r)*4+3];return 0==n}function nH(e,t){e.ears.updateTexture(t)}function nz(e,t){e.cape.updateTexture(t,!e.elytra.mesh.visible),e.elytra.updateTexture(t,e.elytra.mesh.visible)}function nG(e,t=!1){let i=null!==e[0].index,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new tx,h=0;for(let c=0;c<e.length;++c){let u=e[c],d=0;if(i!==(null!==u.index))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let e in u.attributes){if(!r.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===n[e]&&(n[e]=[]),n[e].push(u.attributes[e]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let e in u.morphAttributes){if(!a.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===s[e]&&(s[e]=[]),s[e].push(u.morphAttributes[e])}if(t){let e;if(i)e=u.index.count;else{if(void 0===u.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;e=u.attributes.position.count}l.addGroup(h,e,c),h+=e}}if(i){let t=0,i=[];for(let r=0;r<e.length;++r){let a=e[r].index;for(let e=0;e<a.count;++e)i.push(a.getX(e)+t);t+=e[r].attributes.position.count}l.setIndex(i)}for(let e in n){let t=nV(n[e]);if(!t)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" attribute."),null;l.setAttribute(e,t)}for(let e in s){let t=s[e][0].length;if(0===t)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[e]=[];for(let i=0;i<t;++i){let t=[];for(let r=0;r<s[e].length;++r)t.push(s[e][r][i]);let r=nV(t);if(!r)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" morphAttribute."),null;l.morphAttributes[e].push(r)}}return l}function nV(e){let t,i,r,a=-1,n=0;for(let s=0;s<e.length;++s){let o=e[s];if(void 0===t&&(t=o.array.constructor),t!==o.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===i&&(i=o.itemSize),i!==o.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===r&&(r=o.normalized),r!==o.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(-1===a&&(a=o.gpuType),a!==o.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=o.count*i}let s=new t(n),o=new ta(s,i,r),l=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=l/i;for(let t=0,a=r.count;t<a;t++)for(let a=0;a<i;a++){let i=r.getComponent(t,a);o.setComponent(t+e,a,i)}}else s.set(r.array,l);l+=r.count*i}return void 0!==a&&(o.gpuType=a),o}let nk={vertex:`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
        }
    `,fragment:`
        uniform sampler2D baseTexture;
        uniform sampler2D glimmerTexture;
        uniform vec2 textureOffset;
        uniform vec2 textureRepeat;
        uniform vec2 glintOffset;

        varying vec2 vUv;

        void main() {
            // --- Base texture ---
            vec2 baseUv = fract((vUv + textureOffset) * textureRepeat);
            vec2 baseSmoothUv = textureRepeat * vUv;
            vec4 baseDuv = vec4(dFdx(baseSmoothUv), dFdy(baseSmoothUv));
            vec4 baseColor = textureGrad(baseTexture, baseUv, baseDuv.xy, baseDuv.zw);

            // --- Glint texture ---
            vec2 glintRepeat = vec2(0.5, 0.5);
            vec2 glintUv = fract((vUv + glintOffset) * glintRepeat);
            vec2 glintSmoothUv = glintRepeat * vUv;
            vec4 glintDuv = vec4(dFdx(glintSmoothUv), dFdy(glintSmoothUv));
            vec4 glimmerColor = textureGrad(glimmerTexture, glintUv, glintDuv.xy, glintDuv.zw);

            // Use brightness of glint (purple on black) as our mask
            float glintLuma = dot(glimmerColor.rgb, vec3(0.299, 0.587, 0.114));

            // Kill the black background and sharpen the mask a bit
            float glintMask = smoothstep(0.15, 0.6, glintLuma);

            // A nice enchant-style purple tint
            vec3 enchantTint = normalize(glimmerColor.rgb + vec3(0.001));

            // Screen-style highlight: push base towards tinted white in glint areas
            // This keeps the item's hue but adds a bright, coloured shimmer
            vec3 highlight = baseColor.rgb + enchantTint * glintMask * (1.0 - baseColor.rgb);

            vec3 finalColor = mix(baseColor.rgb, highlight, 2.0);

            gl_FragColor = vec4(finalColor, baseColor.a);

            if (gl_FragColor.a < 0.0001) {
                discard;
            }
        }
    `},nW=(e,t,i,r,a)=>{let n=new t4(e,t,i);n.translate(r.x,r.y,r.z),a.push(n)};function nX(e,t,i,r,a,n,s,o){let l=e.getAttribute("uv"),h=e.getIndex();l.setXY(h.getX(0),(t+r+n)/s,1-(i+n)/o),l.setXY(h.getX(1),(t+r+n)/s,1-(i+n+a)/o),l.setXY(h.getX(2),(t+r+2*n)/s,1-(i+n)/o),l.setXY(h.getX(3),(t+r+n)/s,1-(i+n+a)/o),l.setXY(h.getX(4),(t+r+2*n)/s,1-(i+n+a)/o),l.setXY(h.getX(5),(t+r+2*n)/s,1-(i+n)/o),l.setXY(h.getX(6),t/s,1-(i+n)/o),l.setXY(h.getX(7),t/s,1-(i+n+a)/o),l.setXY(h.getX(8),(t+n)/s,1-(i+n)/o),l.setXY(h.getX(9),t/s,1-(i+n+a)/o),l.setXY(h.getX(10),(t+n)/s,1-(i+n+a)/o),l.setXY(h.getX(11),(t+n)/s,1-(i+n)/o),l.setXY(h.getX(12),(t+n)/s,1-i/o),l.setXY(h.getX(13),(t+n)/s,1-(i+n)/o),l.setXY(h.getX(14),(t+r+n)/s,1-i/o),l.setXY(h.getX(15),(t+n)/s,1-(i+n)/o),l.setXY(h.getX(16),(t+r+n)/s,1-(i+n)/o),l.setXY(h.getX(17),(t+r+n)/s,1-i/o),l.setXY(h.getX(18),(t+n+r)/s,1-(i+n)/o),l.setXY(h.getX(19),(t+n+r)/s,1-i/o),l.setXY(h.getX(20),(t+n+2*r)/s,1-(i+n)/o),l.setXY(h.getX(21),(t+n+r)/s,1-i/o),l.setXY(h.getX(22),(t+n+2*r)/s,1-i/o),l.setXY(h.getX(23),(t+n+2*r)/s,1-(i+n)/o),l.setXY(h.getX(24),(t+n)/s,1-(i+n)/o),l.setXY(h.getX(25),(t+n)/s,1-(i+a+n)/o),l.setXY(h.getX(26),(t+r+n)/s,1-(i+n)/o),l.setXY(h.getX(27),(t+n)/s,1-(i+a+n)/o),l.setXY(h.getX(28),(t+r+n)/s,1-(i+a+n)/o),l.setXY(h.getX(29),(t+r+n)/s,1-(i+n)/o),l.setXY(h.getX(30),(t+(2*n+r))/s,1-(i+n)/o),l.setXY(h.getX(31),(t+(2*n+r))/s,1-(i+a+n)/o),l.setXY(h.getX(32),(t+(2*r+2*n))/s,1-(i+n)/o),l.setXY(h.getX(33),(t+(2*n+r))/s,1-(i+a+n)/o),l.setXY(h.getX(34),(t+(2*r+2*n))/s,1-(i+a+n)/o),l.setXY(h.getX(35),(t+(2*r+2*n))/s,1-(i+n)/o)}class nj{constructor(){this.skin=new nK,this.overlay=new nZ,this.ears=new nQ,this.cape=new nJ,this.elytra=new n$,this.group=new eA,this.group.add(this.skin.getMesh(),this.overlay.getMesh(),this.ears.getMesh(),this.cape.getMesh(),this.elytra.getMesh())}changeSkinModel(e){this.group.remove(this.group.getObjectByName("Skin"),this.group.getObjectByName("Overlay")),this.group.add(this.skin.getMesh(e),this.overlay.getMesh(e))}}class nY{constructor(){this.material=new ia({side:2,transparent:!0,alphaTest:1e-5})}hasTexture(){return null!=this.texture}updateTexture(e,t=!0){this.texture=e,null!=this.texture?(this.texture.magFilter=1003,this.mesh.visible=t):this.mesh.visible=!1,this.material.map=this.texture}getMesh(){return null==this.mesh&&(this.mesh=this.generateMesh()),this.mesh}}class nq extends nY{currentFrame=1;lastFrameTime=0;constructor(){super(),this.material=new ii({vertexShader:nk.vertex,fragmentShader:nk.fragment,transparent:!0,side:2,uniforms:{baseTexture:{type:"t",value:null},glimmerTexture:{type:"t",value:null},textureOffset:{type:"v",value:new R(0,0)},textureRepeat:{type:"v",value:new R(1,1)},glintOffset:{type:"v",value:new R(0,0)}}})}updateTexture(e,t=!0){if(this.texture=e,null!=this.texture){this.texture.magFilter=1003,this.material.uniforms.baseTexture.value=e;let i=e.source.data.width,r=e.source.data.height/(i/2);this.material.uniforms.textureRepeat.value=new R(1,1/r),this.mesh.visible=t}else this.mesh.visible=!1}animate(e){let t=this.material.uniforms.baseTexture.value;if(null!=t){let i=t.source.data.width,r=t.source.data.height/(i/2);this.lastFrameTime<Date.now()-100&&(r>1&&(this.currentFrame>r&&(this.currentFrame=1),this.material.uniforms.textureOffset.value=new R(0,-this.currentFrame),this.currentFrame++),this.lastFrameTime=Date.now());let a=this.material.uniforms.glintOffset.value;a.x-=.2*e,a.y-=.5*e}}}class nK extends nY{constructor(){super()}getMesh(e){return this.mesh=this.generateMesh(e),this.mesh}generateMesh(e){let t=[];nW(8,8,8,new P(0,10,0),t),nX(t[0],0,0,8,8,8,64,64),nW(8,12,4,new P(0,0,0),t),nX(t[1],16,16,8,12,4,64,64),nW(e?3:4,12,4,new P(e?-5.5:-6,0,0),t),nX(t[2],40,16,e?3:4,12,4,64,64),nW(e?3:4,12,4,new P(e?5.5:6,0,0),t),nX(t[3],32,48,e?3:4,12,4,64,64),nW(4,12,4,new P(-2,-12,0),t),nX(t[4],0,16,4,12,4,64,64),nW(4,12,4,new P(2,-12,0),t),nX(t[5],16,48,4,12,4,64,64);let i=new tV(nG(t),this.material);return i.name="Skin",i}}class nZ extends nY{constructor(){super()}getMesh(e){return this.mesh=this.generateMesh(e),this.mesh}generateMesh(e){let t=[];nW(8.5,8.5,8.5,new P(0,10,0),t),nX(t[0],32,0,8,8,8,64,64),nW(8.5,12.5,4.5,new P(0,0,0),t),nX(t[1],16,32,8,12,4,64,64),nW(e?3.5:4.5,12.5,4.5,new P(e?-5.5:-6,0,0),t),nX(t[2],40,32,e?3:4,12,4,64,64),nW(e?3.5:4.5,12.5,4.5,new P(e?5.5:6,0,0),t),nX(t[3],48,48,e?3:4,12,4,64,64),nW(4.5,12.5,4.5,new P(-2,-12,0),t),nX(t[4],0,32,4,12,4,64,64),nW(4.5,12.5,4.5,new P(2,-12,0),t),nX(t[5],0,48,4,12,4,64,64);let i=new tV(nG(t),this.material);return i.name="Overlay",i}}class nQ extends nY{constructor(){super()}generateMesh(){let e=[];nW(8,8,1,new P(6,15,0),e),nW(8,8,1,new P(-6,15,0),e),nX(e[0],0,0,6,6,1,14,7),nX(e[1],0,0,6,6,1,14,7);let t=new tV(nG(e),this.material);return t.name="Ears",t}}class nJ extends nq{glintTexture;constructor(){super();let e=new ig;this.glintTexture=e.load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAA400lEQVR42uWdedBc1Zne+8/UVOJkvK94sBEeNrMIMJJYBUhIiE1ISDICgwRCgEBCQvoEGCQkoY1NQmAzLAMejxnGzNiZGTLYzsSOGTtxMpnEMYmzOU4m+1ZJqlKpSipVuTm/9z3P7XNv9719bndLw1T+aPX36eu+9yzveffnub0rP/1QceHH1xWX/9LmYt5H1xaXfOLuYvGnthfXnri7uPqEHcW1s3YVK05+slh18qFizem/Wqw945Xi3nP/cvGFz/5KccdZXys2fu53iy1zvlU8duk/KF645n8WT1/xr4r9l/3j8Ps7xcMX/s3iixf+jWL7+X+9uHP2bxZrzvjV8L0X7HpLP/NYseyXDxTXzHrUXjec9ER431nceOqR4tbTX7Lr337mV4ubT3u+uPPs37R77r30HxYPnP92cf/c7xT3nfdmcdfZb9j35h93T3HpJ+8tVp1yuLj+l/cXy096vLji+G1hHg8Uy8M9rp61o1hywsP2f5d/8r7i+s/sC/feX5z1gWXF+R9bW5z0lxYUn/vwjcUpv7jI/m/uR28N67Ah/O224oKP3W7fu+yTm4qrTnikYL1YC66zIKzZlZ9+sFgU1uuWz74Y5vrD4p5zvlHcduZXwhxetrnceOqzxcqTnwprfEdx7oc+b9e8+BN3hu/eb2NYcdKT9t17zvlmmM/Xw7z+SrH5vLdsfvx899m/VWyd+1fDvL9fPHXFnxSPXvJ3bU1n5n3P/s495h+3weZx7Ym7bKwLj7/f5jH7A8ttbbgn7/ztqrAOjOmm074U1mxj0WOzmTATvOjj6+1DXIjNuS4IAYNcfepz9rr9zF+zTdk69w+Ke879pg30wQvetgEduPyflAKwZ/47xc6L/06xPQxy27y/Vmz63O/ZhiJUSz79RbsHC3DdiXtsM1gEBsTvLC4/fz5sJt9BWNad9et2v32X/TTc7w9NALgmArAiLC7Cu+CXttj3Vp1yyCaoTeeaCMfFn7jLXgg44+D/z3z/0ooAnPreK22TLvr4neGa99lGIQBcnwVk8RACrs8c2HgOCYLLpj9y0Y/sQKwLa4QQI5ys4/Wf2Wv38WuvN8FB6BES5sBcNs95ywRgwzm/bYfljrNes59Zb4SBdXxy4b8M6/rHtgYcOj6/NFz7vA/fFMa/2vaNMS0OQjnnI18o5n7kFhsn81/0qRkT3gEBuOL4GdMA/BHJWXLCF8OpOWiniQmwwJxaNkObvuPiP7JTjcQ/HCaNAKABnr/qvxcHF/zM/s4gWQxOLpPg+iwsC8BiMsiVJz9t9+H1+VOesXsjEJxgJoZ0rwhjYDHuPfd3XAASDcACISicdDZmTdBOaAwmx/+x2QtMs91anB+0G5vJXFn8VABO/sUr7BCcFU7MvI+uKS497l4TAD7P//MzB4TvITzcg5PP5rO5aDO04Y6L/naxMYxzTdhY5nPdiY/Z33mhAVybzIR1fdwEhhPM5vNCA6wOG8N3pUGYN1qTdUQLPL7g56ZV75/zHdsLDiRjQgDYcNbOBfLRUtj5ncNRFwBeCHiPD0siOZ0sPBvjp8k3Zv3s100q2XQGgIpn0xEANAD/v2f+T4ojV/4nU/2oJwSFibBYnEoW4LwP32xSx0CWhsW58ZQjdvoROF4sPAvL5rCojAH1yeIiSNIA24IG4sSwMAima5K9dj/GzKlD0M77yM0mbOd+6Eb7GSFIBQA1yecQhIvC+NACCACLx1hSE3DF8VvLzWRzpEV0ytFSrAnrdNNpXzZNhgDwN7QYG8Dic5jumP2anXwEgHfM6tozXg2Cf9A2hjmxblwTTcJm81lM4My879q87w7fQwAYB2NkHqyVm7cDJrCXBTNVFwDWl7FxH9MATAi1wQagQpBOH8QLNihucv+cb9uNHw3qBxWEALDp28//nr2jjh656G8F9f9vTA2yWXyXATEYXiyob/BDpZSyeCziElOtD9tEOLm+0PvM7CAgLgC/Uwoe90Qlcl/uw2fRAHye610dVDIn4uwPrrCFOedDqyoC4CZuf9jwm0w98ncEYPYHb7DTlJoATpEWThoRQeP70lbMBTuOnV4/+zdMADg4fJ4xoZnYVE4zm3pbGDPXuO2Mr9j3EHRemBLWTL/zd7Qg30FQdl3yY9MEaAy0H4KEj4OQc4i5l40xrBmbngrAwmByEWTmwf7eEvYXLdzjtDMB3pkU0sGmY1+QNNStnDkJADYegeCUbz7v901C2RDMAKoZiWYBWCAmxA25MQNBBerF4JDMheF0of5Z+CVoh3D6eTEhvo8GYtIHL/9nZl4YC5qHsSGoXIONxFxwTTaMTcUJqghAONFsKI4iC4VA8D13Bm+rmADGxzsnCYHhhbmxDQkmzdRt8DN8DtttgxEANAAaQi8OA4Iqh5bxrjLTd8h+55psGL9zCBiXNCP34j5oAQRr9/wfu/YLa46pQSj4HvPHl7v5s8/beqUCgFZnjggA64LGuOX0F00AGXuPzbk+2lsGxI3YRE4ZE5LaZ9EfvvBHxUMX/NA2YdPn3jSPlwn79163z/E7i6FTcHN454X06URhDnixcO6tuzPF/yGVbD4T9wV6xiaK3cMJ4hSgZTAzLC4nkmuy0Qgwk+QaqQBgAthsVDveO4vMC6Hgu6kJkJPGdXxhH7CxIDTunD5jdhqBRkhY4DQKMPV8zm/54Qhmis2XE6x5ScA5dGhctC8bx72IukyLhfUwrRx+R5BYVw4e+4HgIwTMn7VlDIw3FQAEl7nxN4TBHeLHTGNxQPEvGEvPnaYv24nHrmwJ6h47y4ZLAHjnxPMzKuihC35gF+B7TMKkKiwAp9I911+zm7BgCBhSyuLPDirZTmNQs6jixZ960DafhWaACAAaYFkM5ZBUTgwLyIY/FSIMNNB2C4HetDGjAjEdOHNMKBUATADqESeQ+3MiEAC7fljc1ATwORw+3nVSGBMbwYJySPTOvF14Z8ooADPFBiGcrA/jlRO8LvzNx/ZguVl8L40S2JwLPubhOILgIexBEwZMxoZw2PCBOIDMn0iMdakLgK4pH4DvYx4VdrMX7B1rh8bscWF+YWN5MXAJAL8jwfgA3IyfOfVMCslFOqVy2fBHgheMZmAxUFuScCbHIp/y3sXhfaXZZ7QBAsAiIgBcx7zWsJhSfywck8cBYiwHLv+nHgaG8aAC0VZLLcS6rSIAvLgHL04zpxoBIF5mg1MTgGrkcyw890cjYRI9R7HTFg9huDJqJhYUAVAUgKAi6JhAfKBdl/y90glG7btH/5J9HpNCpGUCHzYNQeQa7mRuMxN0SRgjm8/fWT+EgPVk/Zk/a0wupC4AHKTUB/BrPGS/M372AQeZsSrcZFw9BotK4ZRLAJiMvE0XkDdsEJxsLsBmMyFuoliezSD2Z2NwzAhpyCNgJ1lETuNp77vK1CwLbuo+agCdOFQVC8+kcFK4JoPk/jiBeMFoIfkdSHIqAFpQNg6twAsBcG9+nW2wTIBrpTvt/rwzBoQAX0Rz4pRzkjzZMxNVuEcBclJRzYyFk4mJUi7gzmAS0YpoWLQggmYmyHIWm+26rB+eOALK7wgAv7vQ7bLr4yPcZZr5WyEM/NmAAPCZ1Afg4PB/7rfsjs5of/MxRawf68i4ewwcAWDzPQv1+6ZeOclI8FrzYF8wSUciWQAuwiJ7yPiU3QBPFR+AwXIjNhLJZDIIAXYYAUATSAPg9KBmFRHw2VWWAHrBroEJ4PpcG0F8LDqf99UEQGEQks/muTq93RIhLOi8aP9RiZw0hUF4+txbMb57yQ/ZyeGdE+sm4cEyCmBB0YLcm3c2W04wAsrGcMI4BHzWX4dN8NxU3Wa+B2ZQvov8DkwSY0DQOPnMHwFi7nUBYM/QxGw268z4uSdrx/c4DOyBhaRB2PmcEmpod9dU33UNwGajVvEBSD0yOV5sBpLEgFgAqU40wfLovCw3Fb/HTgVShcpTRKFwDwE4+4MrSw3AIrC4it899DxiJgWb7rZ2n/0f98AMIFjkGioCUIZBG8pUMNfkntj91ARcFgRBYRCLcYtFD9vt/pxOTM8l0UTwHf6WRgF8jlQ4m46N5/5ygll0NoNF5fCwPrck3j55ADQUJpA1IOM4+4PLTQB4IaT4LWhF+Rys4dqY2EoFgMTb9qi10QBstuw7e6acgjmD4YUWcqfva+XJJ1ejnEIPyUVimRDq1nPYz9pGs1ieA3/YFojwhMW7Izo1LIxODn9DiyAASD0bd1V0oqQBzvzA9bYxlgkM6o+FYaCuRZ6wE4kWYBO59irTOPtsQqkA9MOgr5epYASA63htoW8CbCNjGMR4UIue43jFE1Jh8aSa50ZnMY0CGL/mzCZg2+UEowl5IXhEQZxO5UBuDv/PnBAc5nTae5cUH/1zZxSf+YuXmgCgCRfEFDb3QfiZv6XDLQF3uCIAzBkfAAFAA5jpDpERwoYzh8CwHoSonHT2wFPNHs4TPjJuz9q+Y8LKfHobgxSxaQzaTm10fNwmuspEuthQhUF8lsXEoWFhOSn8P8LEgJSNuyqqdxadxbVMYPishTtscDgdHk/vtIVW1s2EJrxWDghADIPm9FPBCAACxUlKTQC/s5mqPSyJm88cEXROs3vc201TcArTKIDxs4EqfpXqPr5bpjSMT2PEXBIm83cWHjOjEJH7nPie+cVxv3BOSDsvtIQTZgkfiM8wf67BOHlPBcCdtjdMANAAREEejv/ADgN+EmvPoUVQ+J3DwXgYN74dLyI0vsP6UVAip2M+ANLihZ89tgheNdrqqlvVwBj+rDLVfsBOxGX22Q0mwQgKA0DKlI5FYDzl6rGvbVL4PAtiXmvQLggBG0AiiN+xjSyW+Q2JACgMQm0pFdyvBj5eMQFu+/ab5mJslmkM91P2j+spPFXxK40CcAK5LyecKiTOnJxg1opN4VTdEOsVWjvmTR6ADfDQeJeNgetySCg4zXrPxZZ04n6sB59xgd1j65UKANdAva+OG4t2pRq4e/7ft5oDQoAmuDv6XGgKzELq0GMq8MskAGgNhAYtIC3WUzmVgbrXfH+ZEubEeAy5NyYSPDZmcLKPCAvvpgHCxqABVALle6h5/oaa04L46bzThMEzVpts8jhBqQCsimEQC69UsKqBG60a2DcBLPLqaLoYXz+WPlCaKtdsXoRiTAiAogDXVJ50wQ/yYos7wb4Rz9k7i80cMR2sDwcDk4MpYP5oF/6G9rNxBS3JODB/2H8cUw83Z2L8XxUAfubAsW7cm+sh7GwiYSaHAPVNMg4HHo1DuIyQkI5HOPi75XCiACAMSh7h7yEEqH/LA7AAro6222Cx18rFowrdRm037cBJ4rUqerUIAQLDBrLpSBgnRRU5eZ+8+DwOIC88YO7JtbnupdFBkwCY5rEw6NkyFaxqIBNLTQAbqWwijpdq8JamDRvDqWexERA0DXNBABQFKLZX3YMTLCfYqpHh/ubT4KgGP4c58Vn1S3iqdaMtJlEUc+ea3N9Mj6n4HXbqmTub7wJfFQDWm/FwXYVsjAEh3DLH/Y5nFv8HOwT4QqhxbbQSZawPmVL9v9dw+gkp1lFJIDQWa93jVOCMMAgkVVkq/t8aDcJGMWA2m/9TqGYbZznzrba4xO6oGdKgaUOE7DxOIF6wNSrEogsTTgUAE6BToFSwqoGcyL2X9quBLIrCIMbECU7Lwfwf42IDTMMFAUQAFAXgA0i7MF4WRU6wijGod0ygq/nHokf/lH0GQZLvMSecagQNAbCQOVx3qTl/D5dzwR+hzlAXAI+S+j4AGgxtwlgwQQgkvhXO37Oh2oojSMn98QX/3F67w4ajCXhJAHBGOeGsD2NSQoo53RATVxwAxtJjcubthkF4+nCTLRbvnFIGfXlMXLCoqQZQRwxCs8Yygf2GiJst9723VL2owFnvucTUIEKQCoAlRcJ1SNYoFaxECwuSmgCrBsYwiMmhltNysDtnh+yaLDpCzUYpCvCk1eu2QN508Y3SCWbjWCDVCnTCubabxSfKphVS2Ti1mE0EgO96dfIVWx/U+NIY4vKqC4BMrUrTHsF4RxRryZgQeswRjhsq/1eu/h/FkaAF0ASU3vkZk8Dmc9LxDx6xKOH75bwQIAR3aYxG2C8cTJJGVg1EXXmKcmtMn95ihRE2hkmqIybVAN4Rs7XMBKYNEdgkTiELIpPB5wiDPv0XLqwIgMIgef5pNZDrpiYA26UwCC3AhNNyMN8h5vVc+H7b9DQKYKEZN5uuugY/ywnGLMhsKPfBWBSxqJ7POvE31goBwI8gfkco0Ezroglk7H2B6gsAn/dGlftNsJbFvIdV/sK42RhOLGOzRpEgBGz+3nC6X136f63rCkH40pL/agKABlDnFT6AwkMEcUUsDMkEorUQMg4Nf2cve5xe2ok4fZxSJmYp09gRgxaQBpCjhIpiodKGCC6I5LGgLCYS53n+7fZKBaAfBj1QpoLLamD4PTUBqgZ6GPRzC4PScjD35bueC3/WnL40Clhu4Zx34OAzsKByguQLKPcghw1BwBaz6QgS12ItzBSGg4EAsJn6P15oHpWDEcS6AFyYVBv5vHL9KpfzHTaLSiOnFvVvafkgVPtDu90zi/998RvLi+Lla/+3a4KgAXAK8QUsLxKEhajANHDYA8YvE6h0tjeo7DcNgwlEmHtM8Iz3X2eTIVunjhjCPCVTvNFwa8wEPl5piJDvwCTwNtkQjyB2lX1zEgCFQdh6pYLLamAYaGoCbojVQBaWTePaaTmYxcYEYCZUTEmjADYRwbTFDJuCEMkJInTC5rv3fcA0EUKgaMSTQO4cU7zifU4Ys6IYNtYyeDGnwYsNxFHjPqkAeLVvnwmAzKnXPjzXbyFcOPVKHbO2aDt8HDYXtX5o0b8tnrvyv5gAoAG+vOS/mRnAByD03GCRgKfLPQPpJtBCzeDDqLawNDr33I/7src9YnNOpDpiPE9/V9kRw8/K6KUNEagSL4lutYXgppSScV7UXSQBUBh0ahACpYJVDUSwZAJYVK6rTaQjhuul5WA8XBZauXDGk0YBaA0WE0Fk89WTqPY0Jr4u/r7YTsXusk1NyaOLYr/CGaFP4PT3Xxs14a1lpzE23qt620uHGccwFQA2U3kChFlRk2m7MEcrd5O3D5/luxojQs11KKxh8lD9CAAa4NeXFXb62fwnF/6JOX14+swJQZYJ9K7ombIayGFQ9zV7iaZhTOxFTx0xTNJVszpitpX5czVEcMqxKywkEyJKUDcxYRBqtSoAM2VBSKlgVQPV/iUTwEZwLU4l4ZZtVCwHk35FbT9BU2RsBpGXqygAe1p2MQUbyKmXE8RmeHLlqVKzME75BggjQsD4WAs0Ib4Q1Tl+5+/MUdEG87dCVizCpAKgBhklw9SljApGJV8zyxNS/P8ay9u/4iYunHgEHfPGqSfUkwCg+Q4v+nfmA6AJOAjqDSB0lQlUH6eqgeRsvEnGq5lehdwYW9kO2hx7bKI3R7qNQvIX2EB3lg0RfFgFESbL6fTOnnVlh08qAMqSaYGwR6oGUhZOTYC0C4NCIJBYlYNZTKViy1x4SGzMJFGASs+owBQz4N74IauGsQhLY9MF9hsfhusr1U1HEHPHRyFP76bQ27iVnVyYOG2ctLoA9HsCYxk43KPfEfV8efqsDT4keRgzIbP6LDxj93Y4+X9UCoCSPvgACP+LZdv9T0zYZALVFa1qoMJg1TJcq60vm13dN/GOqF7aEeOZwC2VhgjlBuS4+CY9XkYIVQH4ti98MAdKBasaiHZJTQAnTn+/PpaV03Iwm6SwToCJNApgsc0UhHti+3jhCaMBsPPKRKrMLDWIMHqd/RlLPFGlO/7Pz7XTjwCc/r5r7GQIGKJeAQ6DbHoqAH76HrAxW5UwjCPtiLK6Q/jZi2e7bTzCAzBevkPcTm5eAoD6J6ISCIR3CjjkAbT5ng39XbuvqoFaL+bGPrIvaGrMFz9bu7s6osIemgDwQaRdRQs1RFxrKnlj6ekiPYti3p6FSAUA6VIYpFSwqoEKHfvVwDVlGKSadVoO9lr9Ec+Fh4XmZwRAUQAnghOCClRmkHy9at3YdzxcB6E8ZMKlDWQ8VgIO92WOIIGIgBAANBO/c+rZ9IWW4t5oC3l11IapAAgRJB/AgSHeEbU+jufW2OOPfbdmz6iprH8grBXhHd+RAKhix8uLOG+bgKstTyZQXdGqBmL/EQLu563he8u+A0Uw6oji4C1LOqJ68n5V1hVqB/WIYKhxMo0GJAC8FBopFaxqIIuMMOnUIYVp0yWnJy0HI7XKK6itSS3TnG58gCOL/6OpQGwgHrCcIO+EeTaq3xfKJolFMaQUJExmS+lZNhx/hEINlUBq9EQiCyxp9Ig5enUBYHEFDFGSSB1RnFTUOaodoWTz10VMA0LA+BBka7sLm+v5/B/EMu0PzRx4zv6t2JTze2VVj+/RFY2GoBBEGIzAoGlYY4T8xrCGmGrGqySeOqLQAAhA2REVDpplAtUQoZqAJyvuMBXI6SAMEkRKAsCJ5cuqHPJ9VQOxQ6kJUCeskDFqelQ5WM0fvKz5YtauMgpYG50kbzl/J8TA/8uSH3KCUI+EdN47dyD6A8+ZE8k92DzeET4EWQ6o2+5dsRt4vWkm5sP8vVdh+4AAWENMBIYgmAi1TAwCTMYOzURHEBtmBaWA9mET1caGcLBGiu/ZdLV3qZOIXIW3wr1cqnQECsGgGkgYvMO6gr5vgoKPwfozbsww68faqiOKNXVTpo6orZ4JPC1mApmoGiFYCFTg3Ggz+DkVALVJp+DIfjXw8NBqoJAxdgKTcnDfz/CyMw6aooBVEReIquSEyyNGANAACIPgaarMEUWg+mU+WBA2nQ0mz4EPIuSP33u//X1BbAS5vOwc2lQRAE+iODAEoSYK4p4CdjrM6ohtOriImdixi3omQ0fOAs3g9YtvRUH4tm2owC2ChqmurzkgBGg0tEEaBiM4hs8MmpFNt86isLZ8Rx1RqHcEQB1RaGkzWUkm0AQAJ5AFYhHwgL1efUtFABQfp+BIxbXejbMxqQa+VkHGcMrTcjChIafKI41Hy+YPFUMcmOKASLWm952g/2z1AOylO4DfscyZcuq3WCHmgE0Sx5bkk2P+rrffz4/oZzaPxVJTKGYBzZYKgDu+XqdQehjNwuagyjUvwbjYRMwSgslLTRf2rmxdqGcYniIItgo1OIMqQMkEKjvIWqorGhP45MJ/Yf6CA27fjH0JT8SCmndEaS36HVEzcU79TCCOKWbTsIFMGnBkCo+WAGAC5EjIT5CnzglLTQCqKEXG3GytUl4OFjBEzZvcWNdTMYTF5EShAjktvOQE8Y7zQyyMNsAGCpKGNDMmrr/C2tgc5IpQ49Gj/th8TgM2kL8JgawEUCoA3hPoKWGlhvsdUR6eopK9YvjlEsRJTE56FiEQPF4CgBZAQISxpJcR9b7GEFSHSxOo1LWqgZgCTqog+ISDlgKPbfqYGXVEzTcN8FSlI4r/154pE0hkx/wRHEsEteHj50VE7bj4eJUdm/DxAlsgjdPEx3uPfYKPj7Z9GD7+3ciPoDC45EeYXeVH8A7uUfwIMxV+BEcyDfIj9CbBx6fImC74eJ3+Oj7e89nTw8fPycDHN/EjOKDl6PAjyATW+REUBjfzI/yjDH6EwxV+BK45yI+wq4TH98bBx6fImC74eK49DB9PmDeIj3/pmODj5QPIdHhH1L7O/AgIwCh+BJnAHH4EtcWPw4/gBbKZLH6E3rHAx98QKVu48WT4+J8OxcczTqtHnPxkiY+vw6Ob8PHiR1DzaBM/AqZtXH4EmcAcfoQlVhcZzY+wpeRHeKFsiLEQPHZks28lP8KHh/MjmACgHtJq4DTx8UyKha7j4+UEjYuPd8jab9vJqOPj6/DoUfh4ZQpH8SNYO3VHfgQdjpQfoU8r82g0M3vKmktXfgRv/Hg1NqEm/Agn7GjlR1AYXKkGDsPHKwzqio/3EudLA/h4OUHj4uMRAG8JnxwfrwxaV34Efh7FjyATmPIjeDWuxo9gtZbtnfkRlAlEADrxI0Qnl3GxzlYNHI6Pv38oPp6JtOHjic3ZmKOHj//JAD5ead9cfDybjPYRPr7Oj4DWGcaP4O/t/AgygSk/ghzISfgRLBM4p58JRMsgcLn8CMqBDONH6OXg47HNbfh41A9qWk2J4+Pjb6/g49WEiZpjEVJ8vDzhSfHxo/gRBLRo40eQCazzI6hFXfwIZ9f4EWyzWvgREPwv1DKB1AJy+REUBrfxI/Ta8PEChjTh41n45bGSNxof/1AjPl5dQcLH69pSy13w8QhrF3z8JPwIMoF1fgSFwdJwrFvKj+Cp92Z+BDcbRyqZQASxzo+AL9XGj6BUdyM/QvhObxg+Xk5IEz4eaT82+Phns/HxLGQdH49T2YaP57rj8CPIBNb5ERQGN/EjnP6+a0fyIyyv8SPw3pUf4eoh/AgXWoEv5Uc43KeJy8XHozaG4eM5QYP4+FfGx8efmI+PR7jq+Hg2ORcfL34ENZm28SPIBObwI6gtXm1k0+BH2DOSH+GJElmdVgPnJfafg5LyI/Ry8PGOXPE4M8XHc/q74OPpCGrHx68r8fF1ePSk+Hi1ltfx8QjAKH4EmcAcfgT+lsWPEOYs7ZE2xKgXosqP8JXh/AgxDPY1vLdSDfRO5pQfYdNQfoReGz4ee6348mjg45FAhUbCx9fh0ZPi4xlPGz4+5UfgWik/gkxgyo/gtjnyI8xK+BFiW3w2P0LYCDXEeJeu8yMsieagjR/hvho/QqUaOGtXJ36E3jB8/GJjztg3gI+XEzQuPh4BAB9P3kHAkHHx8Q53nhwfP4wfQSYw5UdIaeIcVeP8CGqL78KPIFxAd36EGAYHbYWmTauBaO86P4LC4DZ+hF6Kj0dVMLg6Pp6FnAQfz4uCE02XdXy80pJN+Hi1hAkfTxxMoaUJH48dH4aPVydOHR/PnITSlQlM+RHSMFj8CNxPbfE5/AjLYrZSmcCu/Ahra/wI1Wpgnx/h8yU/woGh/AgChqT8CD0VQ9T0MAk+noENw8cz6To+XuXgJny8WsKEj2fzAEg04ePdBA3i4yUMTfh4bKhMYMqPkNLE9fkR9nTiR1ALuDKB6p/M5UdYmcmPsKDkR3gu9lhW+RHUEZ3yIyCkJgBsljzosfHxx91bwccrTSwkzdHGx6vRchQ+XvWDFB8/jB9B4xE/gsJVgV1ZjzZ+BM8EfqmSCeSzg/wIm4fyIygM9tawNn6Eb5TdVoy1zo8gYEjKj8DPwkQaWfRIfPyJ+fh4NiLFxy/pgI93MOnRwccLJTQMH5/yIygMbuJHUEzfxo+AkKX8CNIEU+VHiL2EXfgRmEPKj4B2ZZ96Dih8ccr4+EPZ+HihjFN8PJvfFR/Paxx8PMKtMLiJH0GnvI0fYW2NH4H8wyA/wsUj+BFuH+BHWDEhP4IOahM/Qm8QH7/jTwUfz8C5bhM+npM/DB9v2bEaPl7QsDZ8PIulGkHKj6C2+GPJj8C96/wIXg0cnx8Bh3YUPwLf7eXg49Ud1IyP31ji4+vw6FH4eLUwNeHjuWYuPl7QsDZ8PL5Mio8XPwKbnsePsLvMBKohxpjMgkAxViWCltpzGIbzIygMduT09mo1MEkvWxr9lCOd+BGW1fgRvAP6qQo/Ar6R+BF6bfh476htxsfPT/DxdXj0uxEfL9UqO8kGqy2+Cz+CcAFLoxOby4+gMJjTr/pLvxo4GT8Ch7fOj8DPo/gRejn4eLeFKT7+0Nj4+EXWcburER+PYzNNfHxKE1fi4yMzqUUlHfgRlAnsyo+gMBgnkHum1cAKP0IYyzWRLT2XH6HOkoZwqxyt9WzjR+jl4uN9Ifr4eJVsm/DxSocKH+/qcKYRH4/qHoaP5+dx8PFpGNTHx28ZwMe38SPUM4FKEefzI2zrxI8gqtg6P4KAIbn8CPhAufwIlglEBab4eAYrfDwNhSk+XuXgJny8WsK64OOpINbx8WiAOj5e0LCu+HhVHYfh44fxI3gmcGclE6iCWA4/QhkGj+RHeKSsM/CdOj+CgCEpP4IwESqGyXRiAq1PMJsf4UWvBqb4ePL1wsdfFDEB7wZ8PBs+Dj6eTR+Fjx/Gj5BmAuUTdeFHUAaviR/BfY+NpWnK4UeoRwGqbYziR8CcpPwI1yX8CPgivUnx8QKLpPh45dib8PHE9tPExysM6uPj92Xj48WPsLjGj+B9EnV+hJlWfgQctTZ+BHn/nfgRTqnzI/x4Yn6EZQk/Qm9cfLwqeSk+npPbFR/P5o+Dj+c7wsezcIaPDwunx8bl4uOnwo8QNIsVgyrVwD4/wnXGj7CmEz8CL7XMi9quzo+ANuzEjxDmX+dH6NXx8XV49Ch8vCbQhI9HIIbh4xGAOj5e0LA2fLzYsq0GMKePj1db9Gh8/LYyE5g+MAIByuVH6IfBG8xfGKgGTsCPoO4gRQEIOOuV8iOgCbvwI5wfBXkYP0JP+Pg6PHoUPl4tUscSH//0Ff86hkEJPj62Refi471y+UKJjxc/ghJBmECEYBg/gsJg7qN08Si29Hx+hD0VljR8AGc86/MjiCQqlx/BWV/b+RF6fxbw8SVNXMTHe1fMdPDxbMwofgSFwQrpqtXALQP8CAqDc/gRVPoVSxrmg7SyU8S/PRY/Aj+n/AjMr86PsCryI/Sa8PFqCRM+njhY9GrD8PFI4zB8PBpgHHx8GgYJgn3A8PF/OBV8PJ+VTW7iRxBNnIpEaTWwwo9wfDs/grJ1VX6EKkuaMauHcWECEfix+BGCpmHfFNojAOJHcIj8BtvnlB+hV8fHqyVM9X5/cMOhRnw8wjAMH4/UjoOPT8OgEh9/9jj4+G1lJjDFxyNkKT5+GD+CaOJG8yNsKdvD2fQ6P4Jq8yk/gnfo9vkR+Jv4EfCBcvkRtlf4Ee6xecjhG+BHiA/pUtRWeXz8scDHIyDHDh9/qJIJTPHx6pNL8fF1AXAOgzuy+BHcp3g0ix8B25vyIzAG9fxb02smP8KjFX6EN0yrebPNaptTyo8w1/gR3PQ08SP0+MDRwsdvjg91GIWPVxiU4uOXRrU4Dj6eyQ3Dx3s4WIVHp/wI4jFs4kfwCGN3mQrP4UcQmEZRABuUx4/wcjM/wtwqP4KekjoOP0IvxcezkF3x8UrMjIOPVxiU4uO9bDsaH795CD6e+yE0ufh4TwG7lzzAjxDG2edHmIkNq/n8CB6RPFZGAcP4EdjETvwIl7XzIygJlsOPwL6aBvAnhmxvxMeT0BmGj3fbXsXHCxrWho9Xy5XsvoM3x8PHpw0RXK/ExweVnIuPr/Mj8L0qP8KGTvwIdZY01pLPp/wIRDbd+BG+lsGPsCWLH0Gl6/KJIU34eO+Zz8PHCxrWho9nAfv4+D6/UD4+/s0yE1g2RIQwCC94Enx8Wg1M+RE8bMvnR+DEplEAJxfhTPkR+EwXfoTVBl0fxY9wuDzdbfwI6sNIO6IYe+9Y4ONFE8cGq3iituhJ8fFK6XbBx6fVQJIzk/AjqHlGLGl6uOQk/AiYxyo/wkuN/Ah1eHydH0EHL+2I8kfJOj9CT/h4L9JMDx+f0sSl+Hi1RU+Kj5fm6YKPr1QDIz6e04F37p9bm82PULJ8RJY0zBSa8ZFYrx+HH0HheL+n/2DJj4Cj2IUfgXmhAdQR1cSP0FtvT8YcxMdrs7vi49Mw6Gjg41UCbcPHKwzKwcdjG0UVW+dHEDAk5Ueos6S5nT9ShmnZ/AixWYVryCxyQOr8CAhByo8gbOS0+BF6Ofh4QcOOBT5+WS0TWMXH/7QVH68waBg+nipnFR9/qOx1qPMjaE4pP4Ie665iGJuHOfB+u69n8yMsGMKP4IWqTbZGVX6E50p+BGEjp8WPwF7bs4Pb8PFk4HLw8QqDUnw8/zcJPt46hcfEx4tuZq45eRtr+PhtFXz8KH4EjwIeLKMAFjiPH+HVKj9ChJ4hjN5Sf1OlU6nCj/CZo8ePwJ6m/Ai9SfDxCoNSfDwqLwsfHxY3Hx//6nB8/OwqPp7xDsXHR27iYfj4Zn6EmRL/Z4/LCfOZlB/htBo/gpBVfX6EO/L5EaJZTvkRBN4dxo8gWts6P0IvxccLGtaGjxdXgLd4CR8/MxE+Xi/h48VywUkdho/fnI2PXzcSH1/nR1DDhqIAtBKbkPIjqOqXy4/AGrTxI3Af5pvFjxB7J6tPDDnYyI/g9v4bA/wICAAHqQegQtCwNny8s2ULH/9qZ3z8POHjjZ+33xCxLNK7V/Dxs6aAjw+/5+DjS36EMIeUJc1zGE9X+BEU4mXzI8QWrGZ+hAdLfoQ6PL7Oj4B5dn6EakdUGz8C4fMofoReDj5etn9lxMfraeBd8PFmT2NDhNvZLw7g48VT0A0f/0SJj181Bj4eIU5Z0hgbC5ryI4gkKpcfAcEezY9wb1mUauNHWB03Nu2IGsWPgJbM4UcwaFgbPl40cYYTNKTv7rItelJ8vIShCz4+rQam+PjLE3y82qly8fFiSVP7loow4/AjMP+UH8ERuePxI7Budu+YB2ETgcK18SOwsTn8CIKGWR6gjo9Pw6CjgY+XB9wFH59WA5vw8ULGdMHHu83dWyZblHLN4Ue4LvZL+EZvtMVkgev8CGrAFD9Cn7CpnR9BHVGj+BG2xXCwzo9gm17jRxA0LOVH6Akfn4ZBk+DjsTt9sqU+Pp6kDH3xbfh4hUF5+Pi3ylRoV3w8i7s2YhXQLvhAufwIKyM/gh0KCxPvtvrBMH6EqxJ+BGEjp8WPAFiG7isEIeVH2BHb7FN+BCWkhvEj9KaFj19TywR2wccrDBqGj7+hAR+/1Yoi3fHxzjz6WllJzOdHcFAL6p35k7ZFnTuCeE2NH+HwUeNHcJxk5EhI+BE46ePwI/Tq+HjvJB0fH0+KcVx8vHvtD5WUtNPEx7tJGcTHD/Ij7KzyI0Qyp0Vlp3SfH2Fu7Lodhx+BNe3Cj0AvwCvX/Z+h/AhoiHH4EYwmjn/YDGLmPHz8rgF8vGBZufh4B2H28fEyO38a+PgmfgRvr5opn4zWzo+wyTReDj8C6yxGEDmjnMgmfgSEis2v8yMgABTHxuFHUBhs4NDu+PgnKg0RSPHRwcc/MRE+nk3NwcfX+RFUW2dOzL2NH+HSDvwIMhWVJ4aceqSVH2FHBMqm/AgIQJ0fQdCwNn4EL0F7GMz9uC9C2cvGx1thwRsi1Io0DXy8ulhlAtAyk+DjmRiLiSCy+aPw8eJH4KSoaZQ5t/MjHLYDoabQNn4EpborHVEkflr4ERDuOj8CAlDnRxA0rI0fwauBVX6ElQk/Qm9cfDzqtSs+vloNXPeuwMeLH4F5MP+UHwEBaOJHqMPj6/wISoalHVELDQzSzI8gIutR/AiCho3iR0DQUn4E7q/HxiEk9sSQrvh471vrho9Pq4FVfPzDpXYRMqYLPh7BmBQfz0lh/syddC15ejeFa0tgSBd+hPWxDKyOqFH8CCr05PAjvFi23TfzI6RhcNpnocfGoe3SjqheLj7eHrsyEh//rWOCj2ehcAKFnMEGjoWPp08wVOlOCL5JnR+BMnDKjyBs5LT4EdBujJc5pPwICHidH6EPDWvmR0jD4JQfQW3xTfwIPeHjF9UygSk+3v2BZny8wqA8fPya2HkzMwY+/mdlpgsVyGLk4uOlbRzq5vj400wgV5sAVPkR7ir5EYSNnBY/Al6+RSJhA1N+BDTANPkR1BY/ih+hV8fHk6AYFx+PalY18PoBfPytE+PjcX5QgSxEPj7+sejPbLYFSPHxCECVH+GGo8aPcKuFd9PlR1AYPC4/ggFDxsHHc2JTfDzfHwcfr/bnUfh4bzl/x2xgLj4+7YYVW4gcUHfmdsVu4PWmmXL5EZRwSvkRGG8TP8KmGJ9Pkx9BYXDJjxDGiQnP40dwcChCbA+MYMFz8fFqk87Dxz89MT5eSRtsYFd8PL7N3Ax8PBucw48g8Ez9iSFt/Ai81/kR/L3KjyBoWBs/goNDPQxGcITPZNNz+RG812Jn9YERSgS9a/DxBkz56vj4+JMOdsLH1+HxdX4EL4LtrHVEvdbKj/Bw3PSUH4GNr/MjCBrWxo/AWogf4ckGfgSho5v4EfgbOZe0IYa1MhPg+PhFnfHxeqBUWg3sho/fVMHHs5iYg674eCbj+PgZWwCBXHPx8U38CGyGdzz1O6JG8SOQrq3zI7D5dX4EQcPa+BEEBmnjRxA6uokfQYm1tCFG/AhlIigHH59WA6v4+M1le7iQMV3w8crTT4aPf7bExyv5xMbV8fEurP1nB9cFQPwILNrimOFDM2FTMWFt/Aic6hx+BEHDRvEjsPmD/Aj+2LgHM/gRuK6ylqP4EXpt+Pi0GtiEjxcypgs+HsGZFB/PKcjDx2+rPDu4jo+v8yOoTDuKH4FN4RTW+RE8OqnyIwga1saPkIbBKT+C2uJz+BEYo5hZ6/wI82N1tM6PUApAV3y8On674OO5tnjqVO/Ox8f/wRB8/FdH4uO14E34+K78CMwPO++9dX1+BDRAnR9BnTjj8COoLT6HH0Hdy8P4ETBtbfwIvUZ8fBCCKj5+a1m/7oqP5zTpeQMspvr88/DxL5f4+H0RH+/8QG/Ywk6Kj8/lR2Bew/gR0ADT5EdQW3wOP4JM0Uh+hA818yOUqWBVAynVVvHxdzfi4/XgxFH4+DWGLupvahd8/Grzhqv4eNcadXz85k74eMyPnhjSxo+A2kf4psmPoDA45Ufglc2PkFDvjMOPIOp8e3j0OPh4AUNG4eP14EZltDrh461g8txRx8c38SMYWCa2Y6f8CAjAuPwICoNLZLFRzs9k8iM4OHRHyo8wtyM/QtCUxo+QpoKnjo8PG4NnzOIofMnDxz8dM4S77W+j8fFvTQUfP4wfgdNW50dg0ev8CIKGtfEjMD6FwdKoCoVz+REQdHIeaUMMZob5iyizjR8BE6AciFLBIsioVAMnwcej2pWm7IKPV359aXQUR+HjETI1hU4DH5/yI6Bl6vwIEoSUH0EJrzZ+BFUDU34EkmopP4LQ0U38CJxuNGbaEIMG2h77/vr8COuG8iNgArSvSgWLIIM9NRPQFR/PhkwVHx/VoHPbLbeUpgotw/DxdXh0Ez6+2hHTjI+3NrEAMs3hRxA0bBQ/AuOt8yPosXFszCh+BIWFaUPMMH4EBLaNHyF9eHRZDQx7UDEBQsZ0wcdj2yfFx/tJf7CCj0cAJsXHqyMmBx/Pdev8CGiAOj+CoGFt/AhpGJzyIyjdTZPJKH4EHG8OXtoQo1wJY7EnpGXwI1wzhB/hQivwDfIj9Lrg4734ccRsvGHnwuZ3xcejroQOQj2Nwsfr2cHTxsfj0Onx8VzLs2tVfgRBw9r4EdIwOOVHUFt8Dj8Cp76JH4Gxj+JHUBicgmPTauAwfgR7/jFPDMnBx1vLVlhQUqGoQE5NV3w8A2IBeH32fVePxMcLmTtNfLzX4r9bwcczl2nyI6gtPocfwXgHInikzo/AfHL5EVJwrMA4g/wIGy3aQOhSfoReDj5enACc9lx8/BdKfPy+svlC+HgEYAAfP6sbPt5UdyY+nnEPw8dbeXYMfgTRxI3Lj+D1hgcy+BGezuJHMARyON1N/AgcNCXiUn4E9rbXho9nEdS1mo+P/6bj48MGXlXDxx/3C+dMAR//xxPh49VjJ3x8F34EhcF9fgSvhObwI8yNHVHCErTyI5zQxI/wTuRH6KeCh/EjcKjryKiUH0EPzjRw6DB8PDdWLbo7Pv71UnUeLXz8Duuh64aPRwCG4eNH8SNwohQGr4r8CNwPlZrLj8CctElqiOnCj3BbyY/QTwU38yMcaORHcL9of4UfoYwChInrjo/fVz6FIwsfH1VgHR59tPDxCEAbPr6JH8HRTeJH6D8JPeVHEDq67YkhzCNtiNFBUyKojR9hVY0fgVSwCDI2deBHUCY35UdgTCYAbJY86PHx8ZtsMTl9nETL5NXw8Xik9qTOGjw6Bx/Phh0tfHydH8GrgXsH+BH02LgUHd3Ej6CKXNoQI34EJYLmxSeWDeNHMM1jYXAfHCuCDG+SSauBzfwIAoak/AgIXcqP0JsGPp6UIjdCACbFx1c6Ykbg4w05EzZ8Enx8yo/AnOr8CCUoNIMfAa2D35E2xKT8CCSCpsKPYH2Fb1WQUSk/AuunLinxIyCw4kfgO2hX9ql3tPHxKgePwserI+ZY4+PTMDjlR1BbfA4/AoLj/Ag/GuBHkBnJ40dYN8CPsKIDP8Ltdl8HhogfgbG18SP0xsHHM7hR+HiFQtPEx4ONQwhSfDwaQOXRcfDxdX4EtcXn8CPouXzD+BEQ6Fx+hBQc20fyPjaUHwHtVudHQGvm8CP4A6leK8EmJgBd8PHi9EEABvHxX+qEj1euPwcfj7qv4+NpvsApnBQfL34EtcXn8COwwVdn8CN4nr+ZHyEFx3LtYfwIXg38ekyEVfkR9ODMQX6EfhSwPGpg14avD/Aj9Lrg45XDnwQfr7r8uwMfv84+k82PELN24/IjYALs9CfgWCXcqvwIBwaQUSk/gh6cOciP0I8COMTiR0CjNvEj9P5/wMcLGCqE7ooIE7eoJIMfQY5h+sCILvwIrBnaReBYR+rcWT7irTQBYSxt/Aj+4Mwft/IjoDVUjtZ6tvEj9Lri4zlRxxIfjwCMg49nA1RyHo6PPzjwxJA6P8Jl0TtPG2IQHuYnosx2foSZCj8CQiCCjEF+hD2N/AhKv4/iRyAC6cqP0Evx8dioRnz88feXTtuxwMcjAOPg41UNrODjo0OkZlehY71pcpAfwVFLOysNMeJHUCKojR9BWVKBY9EWIsjApObyIwgYkvIjsE51foTV8ans4/AjWFs4j49HOhGAJnx8HR7dhI+vd8S04eNJaPCdaeHj0zDI8PEGQGnHx9c7ovhe2hAzDj9CCo7Vi+6c1AS08SMIGJLyI7DZKUuaahsT8SPQEQSgAgGYFB+vjpgcfDyxPR7sNPDxKU3cOPh4gUNVtKrzIwgvmMOPkKaCR/EjCBmV8iNwX67jzaCRH+HUlB/h5+YDoCHH5UcQLoN72ePjm/DxAkpMGx+PgKT4eG14V3x8ShM3CT6+iR8Bf2EUP0JKHVfnR1jWwI+gh1mm/AjCH/B/Ci05uVV+hO9Nxo8Q0dkpP4IJQB0fr2cHTxMfz4nVM4eEj+d9mvh4tUV3xcfX+REcvZPLj9AHxzLOZn6EvXb/cfgRcAIn4UfgXhJktaO57+b8CL0FsREkFx+PF5yLjydDd9Tx8bEtelx8/DB+hLnRZ2jiR0jBsWoaGVYN5PQhLHV+BHUK1fkR0iiAeU/Cj4Bw+kMwW/gR8AH+LODjVeNP8fFcR/j4yhNDOuLjc/gRlBtJwbEq4w7jR0iRUSk/gh6c2cqPYOnar03Ij7BzJD/CysiP0OuCj78phifHCh8vmrgqPv7tsh8wfWJILj7eys0JPr6NHwET4GHwfaV6FkHGID/C8438CJgpBKDKj7Cxwo/AyWVck/AjYE7a+BHQQIw15Uf4f4wZVz0lTkLNAAAAAElFTkSuQmCC"),this.glintTexture.magFilter=1003}generateMesh(){let e=new t4(10,16,1);e.translate(0,-3,4),nX(e,0,0,10,16,1,64,32),e.rotateX(-.25),e.rotateY(w.degToRad(180));let t=new tV(e,this.material);return t.name="Cape",t}toggleGlint(e){e?this.material.uniforms.glimmerTexture.value=this.glintTexture:this.material.uniforms.glimmerTexture.value=null}}class n$ extends nq{generateMesh(){let e=new t4(12,22,4);e.translate(2,-7,-4),e.rotateX(.2617994),e.rotateZ(.2617994);let t=new t4(12,22,4);t.scale(-1,1,1),t.translate(-2,-7,-4),t.rotateX(.2617994),t.rotateZ(-.2617994),nX(e,22,0,10,20,2,64,32),nX(t,22,0,10,20,2,64,32);let i=new tV(nG([e,t]),this.material);return i.name="Elytra",i.visible=!1,i}}class n0{playerObject=new nj;clock=new iB;constructor(e){this.renderer=new nr({canvas:e.canvas,alpha:!0}),this.canvas=this.renderer.domElement,this.scene=new eN,this.scene.add(new iU(0xffffff,3)),this.camera=new iC(30,this.canvas.clientWidth/this.canvas.clientHeight),this.camera.add(new iD(0xffffff,1)),this.camera.position.z=90,this.scene.add(this.camera),this.composer=new np(this.renderer),this.renderPass=new nf(this.scene,this.camera),this.fxaaPass=new nc(nm),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.scene.add(this.playerObject.group),this.textureLoader=new ig,this.loadSkin(e.skin),this.loadCape(e.cape),this.loadEars(e.ears),this.setDinnerbone(e.dinnerbone),this.setGlint(e.glint),this.controls=new nb(this.camera,this.renderer.domElement),this.animate=this.animate.bind(this),this.animate()}resizeRendererToDisplaySize(){let e=window.devicePixelRatio,t=Math.floor(this.canvas.clientWidth*e),i=Math.floor(this.canvas.clientHeight*e),r=Math.abs(this.canvas.width-t)>1||Math.abs(this.canvas.height-i)>1;return r&&(this.renderer.setSize(t,i,!1),this.composer.setSize(t,i),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.canvas.clientWidth*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.canvas.clientHeight*e)),r}animate(){if(this._dispose)return;requestAnimationFrame(this.animate);let e=this.clock.getDelta();this.controls.update(),this.composer.render(),this.playerObject.cape.animate(e),this.playerObject.elytra.animate(),this.resizeRendererToDisplaySize()&&(this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this.camera.updateProjectionMatrix())}dispose(){this._dispose=!0,this.renderer.dispose(),this.composer.dispose(),this.fxaaPass.dispose(),this.playerObject.skin.material.dispose(),this.playerObject.overlay.material.dispose(),this.playerObject.ears.material.dispose(),this.playerObject.cape.material.dispose(),this.playerObject.elytra.material.dispose()}setDinnerbone(e){let t=w.degToRad(180*!!e);this.playerObject.group.rotation.x=t,this.playerObject.group.rotation.y=t}setGlint(e){this.playerObject.cape.toggleGlint(e)}setElytra(e){(this.playerObject.cape.mesh.visible||this.playerObject.elytra.mesh.visible)&&(this.playerObject.cape.mesh.visible=!e,this.playerObject.elytra.mesh.visible=e)}loadSkin(e){null==e&&(e=Math.random()>=.5?"https://textures.minecraft.net/texture/3fb7213b724c6bb9163e031791788dd4792436b4cd0ce7a2854f7ef231781a":"https://textures.minecraft.net/texture/83cee5ca6afcdb171285aa00e8049c297b2dbeba0efb8ff970a5677a1b644032"),e=this.formatSrc(e);let t=new Image;t.crossOrigin="anonymous",t.src=e,t.onload=()=>{var e;let i,r=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(r.canvas.width=t.width,r.canvas.height=t.height,32==t.height){r.canvas.height=64,r.save(),r.scale(-1,1);let e=(e,i,a,n,s,o)=>r.drawImage(t,e,i,a,n,-s,o,-a,n);e(4,16,4,4,20,48),e(8,16,4,4,24,48),e(0,20,4,12,24,52),e(4,20,4,12,20,52),e(8,20,4,12,16,52),e(12,20,4,12,28,52),e(44,16,4,4,36,48),e(48,16,4,4,40,48),e(40,20,4,12,40,52),e(44,20,4,12,36,52),e(48,20,4,12,32,52),e(52,20,4,12,44,52),r.restore()}r.drawImage(t,0,0),e=this.playerObject,i=new t0(r.canvas),nB(r,50,16,2,4)&&nB(r,54,20,2,12)&&nB(r,42,48,2,4)&&nB(r,46,52,2,12)?e.changeSkinModel(!0):e.changeSkinModel(!1),e.skin.updateTexture(i),e.overlay.updateTexture(i)}}loadCape(e){if(null==e)return nz(this.playerObject,null);e=this.formatSrc(e),this.textureLoader.load(e,e=>{nz(this.playerObject,e)})}loadEars(e){if(null==e)return nH(this.playerObject,null);e=this.formatSrc(e),this.textureLoader.load(e,e=>{nH(this.playerObject,e)})}formatSrc(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:image/png;base64")||e.startsWith("./")||e.startsWith("/")||(e=`data:image/png;base64,${e}`),e}}}}]);