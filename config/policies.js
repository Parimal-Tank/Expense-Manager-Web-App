/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  UserController: {
    '*': 'isAuthenticated',
    login: true,
    signUp: true,
    verification : true
  },
  AccountController: {
    '*': 'isAuthenticated'
  },
  TransactionController : {
    '*': 'isAuthenticated'
  }

};
