param location string

var apps = [
  {
    name: 'web'
  }
]

resource staticwebApps 'Microsoft.Web/staticSites@2022-09-01' = [for app in apps: {
  name: '${resourceGroup().name}-${app.name}'
  location: location
  properties: {}
  sku: {
    name: 'Free'
    size: 'Free'
  }
}]
