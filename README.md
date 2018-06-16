# CrashReports <img src="https://github.com/Alelizzt/CrashReports/blob/master/src/images/logo.png" width="48">
Aplicación móvil para generar reportes
## Requerimientos de sistema
- [Node.js](https://nodejs.org/)
- [Java 8](https://www.java.com/es/download/)
- [Java SE Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio](https://developer.android.com/studio/?hl=es-419)
- [Yarn](https://yarnpkg.com/lang/en/)

## ¿Cómo compilar?
#### Clone & install
```
git clone https://github.com/Alelizzt/CrashReports.git
```
```
cd CrashReports
```
```
npm install
```
#### iOS
```
react-native run-ios
```
#### Android

Iniciar android avd y arrancar un emulador
```
react-native run-android
```
* Si decide utilizar un smartphone 
```
adb reverse tcp:8081 tcp:8081
```
```
react-native run-android
```
**NOTA** Si utiliza Windows agregue `%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools` al path para utilizar **adb**.
