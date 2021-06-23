
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.1",
    "info": {
      "version": "1.0.0",
      "title": "AdventHymnals REST API",
      "description": "",
      "termsOfService": "",
      "contact": {
        "name": "The Developer",
        "email": "editor@gospelsounders.org?subject=AdventHymnals REST API",
        "url": "http://www.gospelsounders.org"
      },
      "license": {
        "name": "Apache License Version 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "adventhymnals.org",
    "basePath": "/",
    "schemes": [
      "http",
      "https"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/auth/logins?filters": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "logins",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "filters",
              "in": "query",
              "description": "filters",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/login": {
        "post": {
          "requiresLogin": false,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "login",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "email": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/changePassword": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "changePassword",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "oldpassword": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/logout?x-authorization": {
        "get": {
          "requiresLogin": false,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "logout",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": false,
              "type": "string"
            },
            {
              "name": "x-authorization",
              "in": "query",
              "description": "token",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/token": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "getToken",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ]
        }
      },
      "/api/drugs/category/apilevel1": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "drugCategory"
          ],
          "tags": [
            "drugs-api1Level1-controller"
          ],
          "summary": "saveAPILevel1",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "drugCategoryId": {
                      "type": "string",
                      "required": true
                    },
                    "api": {
                      "type": "string",
                      "required": true
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "apiLevelOne"
          ],
          "tags": [
            "drugs-api1Level1-controller"
          ],
          "summary": "editAPILevel1",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "apiLevelOneId": {
                      "type": "string",
                      "required": true
                    },
                    "api": {
                      "type": "string",
                      "required": false
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/category/apilevel1?verified&drugCategoryId&api&apiLevelOneId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [],
          "tags": [
            "drugs-api1Level1-controller"
          ],
          "summary": "getAPILevel1",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "drugCategoryId",
              "in": "query",
              "description": "drugCategoryId",
              "required": false,
              "type": "string"
            },
            {
              "name": "apiLevelOneId",
              "in": "query",
              "description": "apiLevelOneId",
              "required": false,
              "type": "string"
            },
            {
              "name": "api",
              "in": "query",
              "description": "apiLevel1",
              "required": false,
              "type": "string"
            },
            {
              "name": "verified",
              "in": "query",
              "description": "verified",
              "required": false,
              "type": "boolean"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "apiLevelOne"
          ],
          "tags": [
            "drugs-api1Level1-controller"
          ],
          "summary": "deleteAPILevel1",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "apiLevelOneId",
              "in": "query",
              "description": "apiLevelOneId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/category/apilevel2?verified&drugCategoryId&api&apiLevelOneId&apiLevelTwoId&apiLevel2": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [],
          "tags": [
            "drugs-api1Level2-controller"
          ],
          "summary": "getAPILevel2",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "drugCategoryId",
              "in": "query",
              "description": "drugCategoryId",
              "required": false,
              "type": "string"
            },
            {
              "name": "apiLevelOneId",
              "in": "query",
              "description": "apiLevelOneId",
              "required": false,
              "type": "string"
            },
            {
              "name": "api",
              "in": "query",
              "description": "apiLevel1",
              "required": false,
              "type": "string"
            },
            {
              "name": "apiLevelTwoId",
              "in": "query",
              "description": "apiLevelTwoId",
              "required": false,
              "type": "string"
            },
            {
              "name": "apiLevel2",
              "in": "query",
              "description": "apiLevel2",
              "required": false,
              "type": "string"
            },
            {
              "name": "verified",
              "in": "query",
              "description": "verified",
              "required": false,
              "type": "boolean"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "apiLevelTwo"
          ],
          "tags": [
            "drugs-api1Level2-controller"
          ],
          "summary": "deleteAPILevel2",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "apiLevelTwoId",
              "in": "query",
              "description": "apiLevelTwoId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/category/apilevel12": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "apiLevelOne"
          ],
          "tags": [
            "drugs-api1Level2-controller"
          ],
          "summary": "saveAPILevel2",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "apiLevelOneId": {
                      "type": "string",
                      "required": true
                    },
                    "api": {
                      "type": "string",
                      "required": true
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "apiLevelTwo"
          ],
          "tags": [
            "drugs-api1Level2-controller"
          ],
          "summary": "editAPILevel2",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "apiLevelTwoId": {
                      "type": "string",
                      "required": true
                    },
                    "api": {
                      "type": "string",
                      "required": false
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/category": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "saveDrugCategory",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "category": {
                      "type": "string",
                      "required": true
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "drugCategory"
          ],
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "editDrugCategory",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "drugCategoryId": {
                      "type": "string",
                      "required": true
                    },
                    "category": {
                      "type": "string",
                      "required": false
                    },
                    "verified": {
                      "type": "boolean",
                      "required": false,
                      "default": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/category?drugCategoryId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "ensureExists": [
            "drugCategory"
          ],
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "deleteDrugCategory",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "drugCategoryId",
              "in": "query",
              "description": "drugCategoryId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/categories": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "listDrugCategories",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/categories?verified": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "listDrugCategories",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "verified",
              "in": "query",
              "description": "verified",
              "required": false,
              "type": "boolean"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/drugs/categories?category&verified": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "drugs-category-controller"
          ],
          "summary": "listDrugCategories",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "category",
              "in": "query",
              "description": "category",
              "required": false,
              "type": "string"
            },
            {
              "name": "verified",
              "in": "query",
              "description": "verified",
              "required": false,
              "type": "boolean"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facilities?organizationId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "ensureExists": [
            "organization"
          ],
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "tags": [
            "facilities-controller"
          ],
          "summary": "listFacilities",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facilities?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "ensureExists": [
            "user"
          ],
          "tags": [
            "facilities-controller"
          ],
          "summary": "listFacilities",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facilities": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "facilities-controller"
          ],
          "summary": "listAllFacilities",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "facility-controller"
          ],
          "ensureExists": [
            "organization"
          ],
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "summary": "saveFacility",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "organizationId": {
                      "type": "string",
                      "required": true
                    },
                    "facilityName": {
                      "type": "string",
                      "required": true
                    },
                    "center": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility?facilityId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ],
              "facility": [
                "FACILITY_ADMIN",
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility"
          ],
          "tags": [
            "facility-controller"
          ],
          "summary": "deleteFacility",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "ensureExists": [
            "facility"
          ],
          "tags": [
            "facility-controller"
          ],
          "summary": "getSingleFacility",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ],
              "facility": [
                "FACILITY_ADMIN",
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility"
          ],
          "tags": [
            "facility-controller"
          ],
          "summary": "editFacility",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "facilityName": {
                      "type": "string",
                      "required": true
                    },
                    "center": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/transfer": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility",
            "userEmail"
          ],
          "tags": [
            "facility-controller"
          ],
          "summary": "transfer facility to a different User",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "organizationName": {
                      "type": "string",
                      "required": true
                    },
                    "facilityId": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/user": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility",
            "user"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "saveFacilityUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "facilityId": {
                      "type": "string",
                      "required": true
                    },
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "authority": {
                      "type": "string",
                      "required": true,
                      "enum": [
                        "FACILITY_ADMIN",
                        "FACILITY_USER"
                      ]
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/user?facilityUserId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ],
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facilityUser"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "deleteFacilityUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityUserId",
              "in": "query",
              "description": "facilityUserId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/user?saveByEmail": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN",
                "OR_THIS_ONE"
              ],
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility",
            "userEmail"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "saveFacilityUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "facilityId": {
                      "type": "string",
                      "required": true
                    },
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "authority": {
                      "type": "string",
                      "required": true,
                      "enum": [
                        "FACILITY_ADMIN",
                        "FACILITY_USER"
                      ]
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "saveByEmail",
              "in": "query",
              "description": "Use email to identify user",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/user?facilityId&userId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility",
            "user"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "deleteFacilityUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/user/authority?facilityId&userId&authority": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility",
            "user"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "deleteFacilityUserAuthority",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            },
            {
              "name": "authority",
              "in": "query",
              "description": "authority",
              "required": true,
              "type": "string",
              "enum": [
                "FACILITY_ADMIN",
                "FACILITY_USER"
              ]
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/users?facilityId&authority&filters": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ],
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility"
          ],
          "tags": [
            "facility-user-controller"
          ],
          "summary": "getFacilityUsers",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            },
            {
              "name": "authority",
              "in": "query",
              "description": "authority",
              "required": false,
              "type": "string",
              "enum": [
                "FACILITY_ADMIN",
                "FACILITY_USER"
              ]
            },
            {
              "name": "filters",
              "in": "query",
              "description": "filters",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/facility/owner?facilityId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "facility": [
                "FACILITY_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "facility"
          ],
          "tags": [
            "facility-controller"
          ],
          "summary": "getFacilityOwner",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "facilityId",
              "in": "query",
              "description": "facilityId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/noauth/activate?activateToken": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "summary": "activateUser",
          "parameters": [
            {
              "name": "activateToken",
              "in": "query",
              "description": "Activate User",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/noauth/activationCode?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "auth-controller"
          ],
          "summary": "getActivationCode",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/noauth/resetPassword": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "summary": "createOrResetPassword",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "passwordToken": {
                      "type": "string",
                      "required": true
                    },
                    "password": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/noauth/resetPassword?email&sendActivationMail": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "summary": "getPasswordResetCode",
          "parameters": [
            {
              "name": "email",
              "in": "query",
              "description": "Your email account",
              "required": true,
              "type": "string"
            },
            {
              "name": "sendActivationMail",
              "in": "query",
              "description": "Send Activation Email to User",
              "required": true,
              "type": "boolean",
              "default": true
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/organization": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "organization-controller"
          ],
          "ensureExists": [
            "user"
          ],
          "summary": "saveOrganization",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "organizationName": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization?organizationId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN",
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization"
          ],
          "tags": [
            "organization-controller"
          ],
          "summary": "deleteOrganization",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN",
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization"
          ],
          "tags": [
            "organization-controller"
          ],
          "summary": "getSingleOrganization",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN",
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization"
          ],
          "tags": [
            "organization-controller"
          ],
          "summary": "renameOrganization",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "organizationName": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/transfer": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization",
            "user"
          ],
          "tags": [
            "organization-controller"
          ],
          "summary": "transfer Organization to a different User",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "organizationId": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/user": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization",
            "user"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "saveOrganizationUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "organizationId": {
                      "type": "string",
                      "required": true
                    },
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "authority": {
                      "type": "string",
                      "required": true,
                      "enum": [
                        "ORG_ADMIN",
                        "ORG_USER"
                      ]
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/user?saveByEmail": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization",
            "userEmail"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "saveOrganizationUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "organizationId": {
                      "type": "string",
                      "required": true
                    },
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "authority": {
                      "type": "string",
                      "required": true,
                      "enum": [
                        "ORG_ADMIN",
                        "ORG_USER"
                      ]
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "saveByEmail",
              "in": "query",
              "description": "Use email to identify user",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/user?organizationId&userId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization",
            "user"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "deleteOrganizationUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/user?organizationUserId": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organizationUser"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "deleteOrganizationUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationUserId",
              "in": "query",
              "description": "organizationUserId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/user/authority?organizationId&userId&authority": {
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "doForSelf": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization",
            "user"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "deleteOrganizationUserAuthority",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            },
            {
              "name": "authority",
              "in": "query",
              "description": "authority",
              "required": true,
              "type": "string",
              "enum": [
                "ORG_ADMIN",
                "ORG_USER"
              ]
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/users?organizationId&authority&filters": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": true,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization"
          ],
          "tags": [
            "organization-user-controller"
          ],
          "summary": "getOrganizationUsers",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            },
            {
              "name": "authority",
              "in": "query",
              "description": "authority",
              "required": false,
              "type": "string",
              "enum": [
                "ORG_ADMIN",
                "ORG_USER"
              ]
            },
            {
              "name": "filters",
              "in": "query",
              "description": "filters",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organization/owner?organizationId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "requiresChildren": [
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "ensureExists": [
            "organization"
          ],
          "tags": [
            "organization-controller"
          ],
          "summary": "getOrganizationOwner",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "organizationId",
              "in": "query",
              "description": "organizationId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/organizations": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "organizations-controller"
          ],
          "summary": "listOrganizations",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user?sendActivationMail": {
        "post": {
          "requiresLogin": false,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "summary": "saveUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string"
                    },
                    "additionalInfo": {
                      "type": "string"
                    },
                    "authority": {
                      "type": "string",
                      "enum": [
                        "SYS_ADMIN",
                        "SYS_USER"
                      ]
                    },
                    "email": {
                      "type": "string"
                    },
                    "firstName": {
                      "type": "string"
                    },
                    "lastName": {
                      "type": "string"
                    },
                    "isActive": {
                      "type": "boolean"
                    },
                    "gender": {
                      "type": "string",
                      "enum": [
                        "Male",
                        "Female"
                      ]
                    },
                    "dateOfBirth": {
                      "type": "string"
                    },
                    "activationPage": {
                      "type": "string",
                      "required": false
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "sendActivationMail",
              "in": "query",
              "description": "Send Activation Email",
              "required": false,
              "type": "boolean",
              "default": true
            },
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/token?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "ensureExists": [
            "user"
          ],
          "summary": "loginasUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/activationEmail": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "ensureExists": [
            "user"
          ],
          "summary": "sendActivationEmail",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "activationPage": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "ensureExists": [
            "user"
          ],
          "summary": "getUserById",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        },
        "delete": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "ensureExists": [
            "user"
          ],
          "ensureDoesntHave": [
            "organization"
          ],
          "notLastAuthority": [
            {
              "system": [
                "SYS_ADMIN"
              ]
            },
            {
              "organization": [
                "ORG_ADMIN"
              ]
            }
          ],
          "summary": "deleteUserById",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/me": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "summary": "getLoggedInUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/organizations?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "organizations-controller"
          ],
          "summary": "listUserOrganizations",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/facilities?userId": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "facilities-controller"
          ],
          "summary": "listUserFacilities",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user": {
        "patch": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "user-controller"
          ],
          "summary": "editUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string"
                    },
                    "additionalInfo": {
                      "type": "string"
                    },
                    "authority": {
                      "type": "string",
                      "enum": [
                        "SYS_ADMIN",
                        "SYS_USER"
                      ]
                    },
                    "createdTime": 0,
                    "email": {
                      "type": "string"
                    },
                    "firstName": {
                      "type": "string"
                    },
                    "lastName": {
                      "type": "string"
                    },
                    "isActive": {
                      "type": "boolean"
                    },
                    "gender": {
                      "type": "string",
                      "enum": [
                        "Male",
                        "Female"
                      ]
                    },
                    "dateOfBirth": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/users?filters": {
        "get": {
          "requiresLogin": true,
          "requiresAdmin": true,
          "doForAnother": false,
          "tags": [
            "users-controller"
          ],
          "summary": "listAllUsers",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "filters",
              "in": "query",
              "description": "filters",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      }
    },
    "tags": [
      {
        "name": "auth-controller",
        "description": "Auth Controller"
      },
      {
        "name": "drugs-api1Level1-controller",
        "description": "API Level1 Controller"
      },
      {
        "name": "drugs-api1Level2-controller",
        "description": "API Level2 Controller"
      },
      {
        "name": "drugs-category-controller",
        "description": "Drugs Controller"
      },
      {
        "name": "facilities-controller",
        "description": "Facilities Controller"
      },
      {
        "name": "facility-controller",
        "description": "Facility Controller"
      },
      {
        "name": "facility-controller",
        "description": "Facility Controller"
      },
      {
        "name": "facility-controller",
        "description": "Facility Controller"
      },
      {
        "name": "facility-user-controller",
        "description": "Facility User Controller"
      },
      {
        "name": "organization-controller",
        "description": "Organization Controller"
      },
      {
        "name": "organization-user-controller",
        "description": "Organization User Controller"
      },
      {
        "name": "organizations-controller",
        "description": "Organizations Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "users-controller",
        "description": "Users Controller"
      }
    ],
    "servers": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
