// // Copyright IBM Corp. 2015,2016. All Rights Reserved.
// // Node module: loopback-example-access-control
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

// module.exports = function(app) {
//     var User = app.models.user;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;
//     User.create([
//       {username: 'Mdtaiyab', email: 'mdtaiyab@gmail.com', password: '123456'}
//     ], function(err, users) {
//       if (err) throw err;
  
//       console.log('Created users:', users);
  
   
//       //create the admin role
//       Role.create({
//         name: 'admin'
//       }, function(err, role) {
//         if (err) throw err;
  
//         console.log('Created role:', role);
  
//         //make bob an admin
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: users[0].id
//         }, function(err, principal) {
//           if (err) throw err;
  
//           console.log('Created principal:', principal);
//         });
//       });
//     });
//   };