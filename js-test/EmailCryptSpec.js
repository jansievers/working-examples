describe("Email Crypt to avoid spam", function() {
  
  it("contains an @ character", function() {
    expect( jcsWorkingExamples.emailCrypt() ).toContain("@");
  });

  it("contains an . character", function() {
    expect( jcsWorkingExamples.emailCrypt() ).toContain(".");
  });
});
