// This file was automatically added by edgio init.
// You should commit this file to source control.
// Learn more about this file at https://docs.edg.io/guides/edgio_config
module.exports = {
  connector: '@edgio/express',

  // The name of the site in Edgio to which this app should be deployed.
  // name: 'my-site-name',

  // The name of the organization in Edgio to which this app should be deployed.
  // organization: 'my-organization-name',

  // Overrides the default path to the routes file. The path should be relative to the root of your app.
  // routes: 'routes.js',

  // When set to true or omitted entirely, Edgio includes the deployment number in the cache key,
  // effectively purging the cache each time you deploy.
  // purgeCacheOnDeploy: false,

  express: {
    // The main entry point for your app, which exports an instance of express app.
    // This file and its dependencies will be bundled into a single file for serverless deployment.
    //
    // If omitted, Edgio will try to find your app in one of the following files:
    // - ./src/server.ts
    // - ./src/server.js
    // - ./src/app.ts
    // - ./src/app.js
    // - ./src/index.ts
    // - ./src/index.js
    // - ./server.js
    // - ./app.js
    // - ./index.js
    //
    // Uncomment the line below to specify the path to the app:
    // appPath: './src/app.js',
    // Uncomment the line below to bundle your express app using @vercel/nft to reduce the bundle size and cold start times
    // nft (Node file trace) produces an exploded, tree-shaken bundle with a node_modules directory containing only those modules
    // used by your app.
    // bundler: '@vercel/nft',
    // Uncomment the line below to bundle your express app using @vercel/ncc to reduce the bundle size and cold start times
    // NCC produces an a single-file, tree-shaken bundle containing only those modules used by your app.
    // bundler: '@vercel/ncc',
  },

  // If you need to proxy some URLs to an origin instead of your Next.js app, you can configure the origins here:
  // origins: [
  //   {
  //     // The name of the backend origin
  //     name: "origin",
  //
  //     // When provided, the following value will be sent as the host header when connecting to the origin.
  //     // If omitted, the host header from the browser will be forwarded to the origin.
  //     override_host_header: "test-origin.edgio.net",
  //
  //     // The list of backend hosts
  //     hosts: [
  //       {
  //         // The domain name or IP address of the origin server
  //         location: "test-origin.edgio.net"
  //       }
  //     ]
  //   }
  // ],

  // Options for hosting serverless functions on Edgio
  // serverless: {
  //   // Set to true to include all packages listed in the dependencies property of package.json when deploying to Edgio.
  //   // This option generally isn't needed as Edgio automatically includes all modules imported by your code in the bundle that
  //   // is uploaded during deployment
  //   includeNodeModules: true,
  //
  //   // Include additional paths that are dynamically loaded by your app at runtime here when building the serverless bundle.
  //   include: ['views/**/*'],
  // },

  // The maximum number of URLs that will be concurrently prerendered during deployment when static prerendering is enabled.
  // Defaults to 200, which is the maximum allowed value.
  // prerenderConcurrency: 200,

  // A list of glob patterns identifying which prerenderConcurrency source files should be uploaded when running edgio deploy --includeSources.
  // This option is primarily used to share source code with Edgio support personnel for the purpose of debugging. If omitted,
  // edgio deploy --includeSources will result in all files which are not gitignored being uploaded to Edgio.
  //
  // sources : [
  //   '**/*', // include all files
  //   '!(**/secrets/**/*)', // except everything in the secrets directory
  // ],
}
