# ROUTE

## [webapp/manifest.json]()

```json
        "routing": {
            "config": {
                "routerClass": "sap.m.routing.Router",
                "viewType": "XML",
                "async": true,
                "viewPath": "com.aikansya.home.view",
                "controlAggregation": "pages",
                "controlId": "app",
                "clearControlAggregation": false
            },
            "routes": [
                {
                    "name": "RouteHome",
                    "pattern": ":?query:",
                    "target": [
                        "TargetHome"
                    ]
                },
                {
                    "name": "RouteTheme",
                    "pattern": "Theme/{id}",
                    "target": [
                        "TargetTheme"
                    ]
                }
            ],
            "targets": {
                "TargetHome": {
                    "viewType": "XML",
                    "transition": "slide",
                    "clearControlAggregation": false,
                    "viewId": "Home",
                    "viewName": "Home"
                },
                "TargetTheme": {
                    "viewType": "XML",
                    "transition": "slide",
                    "clearControlAggregation": false,
                    "viewId": "Theme",
                    "viewName": "Theme"
                }
            }
        },
```
