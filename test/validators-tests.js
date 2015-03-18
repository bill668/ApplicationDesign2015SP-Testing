var assert = chai.assert;

describe('validators', function () 
{
	describe('isString()', function () 
	{
		it('should return true when passed a string', function () {
			
			assert.isTrue(validators.isString('I a string'));
		});

		it('should return false when passed a number', function(){

			assert.isFalse(validators.isString(3525252));
		});
	});

	describe('required()',function()
	{
		it('should return true when the element is defind or exist',function()
		{
			var God = 42;
			assert.isTrue(validators.required(God));
		});

		it('should return flase when the elment is not defind or null',function()
		{
			var Sega; // have to?
			assert.isFalse(validators.required(Sega));
		});

	});


	describe('lengthAtLeast()',function()
	{
		it('should return true when object lenght larger than target setting length',function()
		{
			var SetLength = [2,5,4];
			assert.isTrue(validators.lengthAtLeast(SetLength,3));
		});

		it('should return false when object lenght lesser than target setting length',function()
		{
			var SetLength = [2,5,4];
			assert.isFalse(validators.lengthAtLeast(SetLength,5));
		});
	});


	describe('lengthAtMost()',function()
	{
		it('should return true when object lenght lesser than target setting ',function()
			{
			var SetLength = [2,5,4];
			assert.isTrue(validators.lengthAtMost(SetLength,5));
			});

		it('should return false when object lenght larger than target setting ',function()
			{
			var SetLength = [2,5,4];
			assert.isFalse(validators.lengthAtMost(SetLength,2));
			});		

	});

});

