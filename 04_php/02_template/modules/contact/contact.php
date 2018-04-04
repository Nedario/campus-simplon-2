<form id="contact_form" method="post" action="libs/form.php" class="f-col">
  <h2 class="title">Contactez-nous</h2>
  <input type="text" name="mail" value="test@gui.com" required>
  <input type="text" name="subject" value="test subject" required>
  <textarea name="message" value="test message" required>
    Ceci est un message de test !
  </textarea>
  <input id="contact_sync" class="btn" type="submit" name="send_contact" value="ok sync">
  <input id="contact_async" class="btn" type="submit" name="send_contact" value="ok async">
</form>
