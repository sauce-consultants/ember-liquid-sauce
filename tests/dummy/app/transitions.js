export default function() {
  this.transition(
    this.fromRoute('home'),
    this.toRoute('page-a'),
    this.use('overUp', {
      shadow: true
    }),
    this.reverse('revealDown', {
      shadow: true
    })
  );
  this.transition(
    this.fromRoute('home'),
    this.toRoute('page-b'),
    this.use('overLeft', {
      shadow: true
    }),
    this.reverse('revealRight', {
      shadow: true
    })
  );
  this.transition(
    this.fromRoute('home'),
    this.toRoute('page-c'),
    this.use('overDown', {
      shadow: true
    }),
    this.reverse('revealUp', {
      shadow: true
    })
  );
  this.transition(
    this.fromRoute('home'),
    this.toRoute('page-d'),
    this.use('overRight', {
      shadow: true
    }),
    this.reverse('revealLeft', {
      shadow: true
    })
  );
}