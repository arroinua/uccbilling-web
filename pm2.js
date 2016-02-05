var pm2 = require('pm2');
 
pm2.connect(function() {
  pm2.start({
    name: "billing-web",
    watch: true,
    script : 'index.js',         // Script to be run 
    max_memory_restart : '100M',   // Optional: Restart your app if it reaches 100Mo 
    env: {
		"DEBUG" : "billing"
    }
  }, function (err, apps) {
    pm2.disconnect();
  });
});