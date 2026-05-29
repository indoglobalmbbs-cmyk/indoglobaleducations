import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { validateDetailedEnquiryForm } from '../../lib/enquiry';

// Use lowercase keys to match Supabase/Postgres defaults
interface Enquiry {
  id: string;
  created_at: string;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  course: string;
  collegename: string;
  howheard: string;
  preferences: string;
  status: 'new' | 'contacted' | 'closed';
}

const Dashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Enquiry | null>(null);
  const [editError, setEditError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('indoglobal')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      const { error } = await supabase.from('indoglobal').delete().eq('id', id);

      if (error) {
        alert('Error deleting enquiry: ' + error.message);
      } else {
        setEnquiries(enquiries.filter((e) => e.id !== id));
      }
    }
  };

  const startEdit = (enquiry: Enquiry) => {
    setEditingId(enquiry.id);
    setEditForm({ ...enquiry });
    setEditError(null);
  };

  const handleEditChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    if (editForm) {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
      setEditError(null);
    }
  };

  const saveEdit = async () => {
    if (editingId && editForm) {
      // Validate form data
      const validationError = validateDetailedEnquiryForm({
        fullName: editForm.fullname,
        email: editForm.email,
        phone: editForm.phone,
        address: editForm.address,
        course: editForm.course,
        collegeName: editForm.collegename,
        howHeard: editForm.howheard,
        preferences: editForm.preferences,
      });

      if (validationError) {
        setEditError(validationError);
        return;
      }

      try {
        const updateData = {
          fullname: editForm.fullname.trim(),
          email: editForm.email.trim().toLowerCase(),
          phone: editForm.phone.trim(),
          address: editForm.address.trim(),
          course: editForm.course,
          collegename: editForm.collegename.trim(),
          howheard: editForm.howheard,
          preferences: editForm.preferences.trim(),
          status: editForm.status,
        };

        const { data, error } = await supabase
          .from('indoglobal')
          .update(updateData)
          .eq('id', editingId)
          .select();

        if (error) throw error;

        if (!data || data.length === 0) {
          alert(
            'No record was updated. It might have been deleted or you may not have permission (RLS).',
          );
        } else {
          setEnquiries((prev) =>
            prev.map((e) => (e.id === editingId ? { ...e, ...updateData } : e)),
          );
          setEditingId(null);
          setEditForm(null);
          alert('Changes saved successfully!');
        }
      } catch (error: any) {
        console.error('Error updating enquiry:', error);
        alert('Error updating enquiry: ' + (error.message || 'Unknown error'));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Enquiry Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(enquiry.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {enquiry.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {enquiry.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {enquiry.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          enquiry.status === 'new'
                            ? 'bg-blue-100 text-blue-800'
                            : enquiry.status === 'contacted'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => startEdit(enquiry)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(enquiry.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {enquiries.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Detailed Edit Modal */}
        {editingId && editForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-800">
                  Edit Enquiry Details
                </h2>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {editError && (
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                      {editError}
                    </p>
                  </div>
                )}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    value={editForm.fullname}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={editForm.phone}
                    onChange={handleEditChange}
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Status
                  </label>
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={editForm.address}
                    onChange={handleEditChange}
                    rows={2}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={editForm.course}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Course
                    </option>
                    <option value="MBBS">MBBS</option>
                    <option value="MS">MS</option>
                    <option value="BDS">BDS</option>
                    <option value="MDS">MDS</option>
                    <option value="MD-MS">MD-MS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    College Name
                  </label>
                  <input
                    name="collegename"
                    value={editForm.collegename}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    How they heard about us
                  </label>
                  <select
                    name="howheard"
                    value={editForm.howheard}
                    onChange={handleEditChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>
                      How did you hear about us?
                    </option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Friends & Family">Friends & Family</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">
                    Student Preferences
                  </label>
                  <textarea
                    name="preferences"
                    value={editForm.preferences}
                    onChange={handleEditChange}
                    rows={3}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 sticky bottom-0">
                <button
                  onClick={() => setEditingId(null)}
                  className="px-5 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-200 active:scale-95"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
