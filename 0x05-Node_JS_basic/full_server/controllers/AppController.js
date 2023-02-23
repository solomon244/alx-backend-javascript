/**
 * Contains the route handlers.
 * @author solomon legesse <https://github.com/solomon244>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
